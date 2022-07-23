import { BadRequestException, Inject, Injectable } from "@nestjs/common"
import * as Sharp from "sharp"

import { AppService } from "../app/app.service"
import { App, AppStatus } from "../app/entities/app.entity"
import { CreateAppProps } from "./interfaces"

@Injectable()
export class DeveloperService {
  @Inject(AppService)
  private readonly appService: AppService
  
  async createApp({
    title,
    short_description,
    description,
    image,
    type_id,
    category_id,
    creator_id,
    link,
  }: CreateAppProps): Promise<App> {
    const app = await this.appService.findOne({ link })

    if (app) {
      throw new BadRequestException("Already created")
    }

    const imageLink = `./public/app-images/${link}.webp`
    const result = await Promise.all([
      this.appService.createApp({
        title,
        short_description,
        description,
        link,
        creator_id,
        image_url: `${link}.webp`,
        category_id,
        type_id,
        status: AppStatus.DRAFT
      }),
      this.saveImage(imageLink, image)
    ])
    
    return result[0]
  }

  async saveImage(imageLink: string, image: Express.Multer.File): Promise<void> {
    await Sharp(image.buffer).resize(150, 150).webp({ quality: 100 }).toFile(imageLink)
  }
}
