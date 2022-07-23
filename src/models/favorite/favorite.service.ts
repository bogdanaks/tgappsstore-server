import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"

import { App } from "../app/entities/app.entity"
import { Favorite } from "./favorite.entity"


@Injectable()
export class FavoriteService {
  constructor(
    @Inject("FAVORITE_REPOSITORY")
    private favoriteRepository: Repository<Favorite>,
    @Inject("APP_REPOSITORY")
    private appRepository: Repository<App>,
  ) {}

  findAll({ tg_user_id }: { tg_user_id: string }): Promise<Favorite[]> {
    return this.favoriteRepository.find({ where: { tg_user_id }, relations: ["app"] })
  }

  async findOne({ app_id, tg_user_id }: { app_id: string, tg_user_id: string }): Promise<Favorite | boolean> {
    const data = await this.favoriteRepository.findOne({ where: { app_id, tg_user_id }, relations: ["app"] })
    if (!data) {
      return false
    }

    return data
  }

  async create({ tg_user_id, app_id }: { tg_user_id: string, app_id: string }): Promise<Favorite | boolean> {
    const favorite = await this.favoriteRepository.findOne({ where: { app_id, tg_user_id } })
    if (favorite) return favorite

    const app = await this.appRepository.findOne({ where: { id: app_id } })

    if (app) {
      this.favoriteRepository.save({ app_id, tg_user_id })
      return true
    } else {
      return false
      // TODO THROW ERROR
    }
  }

  async delete({ tg_user_id, app_id }: { tg_user_id: string, app_id: string }): Promise<boolean> {
    const favorite = await this.favoriteRepository.findOne({ where: { app_id, tg_user_id } })
    if (favorite) {
      await this.favoriteRepository.remove(favorite)
      return true
    } else {
      return false
      // TODO THROW ERROR DOESNT EXIST
    }
  }
}
