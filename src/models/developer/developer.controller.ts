import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common"
import { ValidationPipe } from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { ApiConsumes, ApiTags } from "@nestjs/swagger"
import { Express } from "express"

import { App } from "../app/entities/app.entity"
import { DeveloperService } from "./developer.service"
import { CreateAppDto } from "./dto/create-app.dto"

@ApiTags("developer")
@Controller({
  version: "1",
  path: "developer",
})
export class DeveloperController {
  constructor(private readonly devService: DeveloperService) {}

  @Post("/app")
  @UseInterceptors(FileInterceptor("image"))
  @ApiConsumes("multipart/form-data")
  async createApp(
    @UploadedFile() file: Express.Multer.File,
    @Body(new ValidationPipe()) createAppDto: CreateAppDto,
  ): Promise<App> {
    return await this.devService.createApp({
      title: createAppDto.title,
      short_description: createAppDto.short_description,
      description: createAppDto.description,
      type_id: createAppDto.type_id,
      category_id: createAppDto.category_id,
      creator_id: createAppDto.creator_id,
      link: createAppDto.link.toLowerCase(),
      image: file,
    })
  }
}
