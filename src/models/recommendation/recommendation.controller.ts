import { Controller, Get, Param, Query, UseInterceptors } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"

import { RecommendationApp } from "./entities/recommendation-app.entity"
import { RecommendationCategory } from "./entities/recommendation-category.entity"
import { RecommendationService } from "./recommendation.service"

@ApiTags("recommendation")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "recommendation",
})
export class RecommendationController {
  constructor(private readonly service: RecommendationService) {}

  @Get("/")
  findAll(
    @Query("category_id") categoryId: string,
  ): Promise<RecommendationApp[]> {
    return this.service.findAll({
      categoryId,
    })
  }

  @Get("/categories")
  findAllCategories(): Promise<RecommendationCategory[]> {
    return this.service.findAllCategories()
  }

  @Get("/categories/:id")
  findOneCategory(@Param("id") id: string): Promise<RecommendationCategory> {
    return this.service.findOneCategory(id)
  }
}
