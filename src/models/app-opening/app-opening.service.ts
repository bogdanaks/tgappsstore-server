import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"

import { App } from "../app/entities/app.entity"
import { AppOpening } from "./app-opening.entity"
import { AppOpeningCreateProps } from "./interfaces"

@Injectable()
export class AppOpeningService {
  constructor(
    @Inject("APP_REPOSITORY")
    private appRepository: Repository<App>,
    @Inject("APP_OPENING_REPOSITORY")
    private appOpeningRepository: Repository<AppOpening>,
  ) {}

  async createAppOpening(appOpening: AppOpeningCreateProps): Promise<AppOpening> {
    const app = await this.appRepository.findOne({ where: { id: appOpening.app_id } })
    const lastOpening = await this.appOpeningRepository.findOne({
      where: {
        app_id: app.id,
        user_id: appOpening.user_id
      },
      order: {
        created_at: "DESC"
      }
    })

    const timerDate = new Date()
    timerDate.setHours(timerDate.getHours() - 1)
    if (lastOpening.created_at >= timerDate) return lastOpening

    return await this.appOpeningRepository.save({
      user_id: appOpening.user_id,
      app_id: app.id,
    })
  }
}
