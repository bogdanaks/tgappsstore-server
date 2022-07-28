import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"

import { AppStatus } from "../app/entities/app.entity"
import { RecommendationApp } from "../recommendation/entities/recommendation-app.entity"
import { RecommendationCategory } from "./entities/recommendation-category.entity"

@Injectable()
export class RecommendationService {
  constructor(
    @Inject("RECOMMENDATION_REPOSITORY")
    private recommendationAppRepository: Repository<RecommendationApp>,
    @Inject("RECOMMENDATION_CATEGORY_REPOSITORY")
    private recommendationCategoryRepository: Repository<RecommendationCategory>,
  ) {}
  
  async findAll({
    categoryId,
    status = AppStatus.PUBLISHED,
  }: {
    categoryId: string
    status?: AppStatus
  }): Promise<RecommendationApp[]> {
    return await this.recommendationAppRepository.find({
      where: { category_id: categoryId, app: { status } },
      relations: ["app", "category"],
    })
  }

  async findAllCategories(): Promise<RecommendationCategory[]> {
    return await this.recommendationCategoryRepository.find()
  }

  async findOneCategory(id: string): Promise<RecommendationCategory> {
    return await this.recommendationCategoryRepository.findOne({
      where: { id },
    })
  }
}
