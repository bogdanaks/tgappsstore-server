import { Body, Controller, Delete, Get, Headers, Param, Post, UseInterceptors, ValidationPipe } from "@nestjs/common"
import { ApiTags,  } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"

import { Favorite } from "../favorite/favorite.entity"
import { AddFavoriteDto, DelFavoriteDto } from "./dto/add-favorite.dto"
import { FavoriteService } from "./favorite.service"

@ApiTags("favorite")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "favorite",
})
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post("/")
  addAppToFavorite(
    @Body(new ValidationPipe()) addFavorite: AddFavoriteDto,
    @Headers("tg_user_id") tg_user_id: string,
  ): Promise<Favorite | boolean> {
    return this.favoriteService.create({ app_id: addFavorite.app_id, tg_user_id })
  }

  @Delete(":app_id")
  deleteAppToFavorite(
    @Param(new ValidationPipe()) delFavorite: DelFavoriteDto,
    @Headers("tg_user_id") tg_user_id: string,
  ): Promise<boolean> {
    return this.favoriteService.delete({ app_id: delFavorite.app_id, tg_user_id: tg_user_id })
  }

  @Get("/")
  findAll(
    @Headers("tg_user_id") tg_user_id: string,
  ): Promise<Favorite[]> {
    return this.favoriteService.findAll({ tg_user_id })
  }

  @Get(":app_id")
  async findOne(
    @Param("app_id") app_id: string,
    @Headers("tg_user_id") tg_user_id: string,
  ): Promise<Favorite | boolean> {
    return await this.favoriteService.findOne({ app_id, tg_user_id })
  }
}
