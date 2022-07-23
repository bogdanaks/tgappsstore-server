import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"

import { AppCategory } from "./app-category.entity"

@Injectable()
export class AppCategoryService {
  constructor(
    @Inject("APP_CATEGORIES_REPOSITORY")
    private appCategoriesRepository: Repository<AppCategory>,
  ) {}

  findAll(): Promise<AppCategory[]> {
    return this.appCategoriesRepository.find({ order: {
      priority: "ASC"
    } })
  }

  findOne(id: string): Promise<AppCategory> {
    return this.appCategoriesRepository.findOne({ where: { id } })
  }
}
