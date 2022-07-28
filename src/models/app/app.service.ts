import { Inject, Injectable } from "@nestjs/common"
import { FindOptionsWhere, Raw, Repository } from "typeorm"

import { AppCategory } from "../app-category/app-category.entity"
import { AppType } from "../app-type/app-type.entity"
import { App, AppStatus } from "./entities/app.entity"
import { AppCreateProps } from "./interfaces"

@Injectable()
export class AppService {
  constructor(
    @Inject("APP_REPOSITORY")
    private appRepository: Repository<App>,
    @Inject("APP_TYPES_REPOSITORY")
    private appTypesRepository: Repository<AppType>,
    @Inject("APP_CATEGORIES_REPOSITORY")
    private appCategoriesRepository: Repository<AppCategory>,
  ) {}

  async findAllApps({
    categoryId,
    page = 1,
    limit = 30,
    status = AppStatus.PUBLISHED
  }: {
    categoryId: string,
    page?: number,
    limit?: number
    status?: AppStatus
  }): Promise<{
    data: App[],
    page: number,
    limit: number,
    total: number,
  }> {
    const data = await this.appRepository.find({
      where: { category_id: categoryId, status },
      relations: ["type", "category"],
      take: limit,
      skip: (limit * page) - limit,
    })

    const totalCount = await this.appRepository.count({
      where: { category_id: categoryId, status },
      relations: ["type", "category"],
    })

    return {
      data,
      page: Number(page),
      limit: Number(limit),
      total: Number(totalCount),
    }
  }

  async findSearch({
    query,
    page = 1,
    limit = 30,
    status = AppStatus.PUBLISHED,
  }: {
    query: string
    page?: number
    limit?: number
    status?: AppStatus
  }): Promise<{
    data: App[],
    page: number,
    limit: number,
    total: number,
  }> {
    const data = await this.appRepository.find({
      where: { status, title: Raw(alias => `LOWER(${alias}) Like '%${query.toLowerCase()}%'`) },
      relations: ["type", "category"],
      take: limit,
      skip: (limit * page) - limit,
    })

    const totalCount = await this.appRepository.count({
      where: { status, title: Raw(alias => `LOWER(${alias}) Like '%${query.toLowerCase()}%'`) },
      relations: ["type", "category"],
    })

    return {
      data,
      page: Number(page),
      limit: Number(limit),
      total: totalCount,
    }
  }

  findOne(where: FindOptionsWhere<App>): Promise<App> {
    return this.appRepository.findOne({ where: { ...where, status: AppStatus.PUBLISHED }, relations: ["type", "category"] })
  }

  findOneApp(id: string): Promise<App> {
    return this.appRepository.findOne({ where: { id, status: AppStatus.PUBLISHED }, relations: ["type", "category"] })
  }

  async createApp(app: AppCreateProps): Promise<App> {
    return await this.appRepository.save({
      title: app.title,
      short_description: app.short_description,
      description: app.description,
      image_url: app.image_url,
      link: app.link,
      creator_id: app.creator_id,
      type_id: app.type_id,
      category_id: app.category_id,
      status: app.status,
    })
  }

  findAllTypes(): Promise<AppType[]> {
    return this.appTypesRepository.find()
  }

  findAllCategories(): Promise<AppCategory[]> {
    return this.appCategoriesRepository.find()
  }
}
