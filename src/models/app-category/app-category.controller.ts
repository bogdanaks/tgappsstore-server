import { Controller, Get } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"

import { AppCategory } from "./app-category.entity"
import { AppCategoryService } from "./app-category.service"

@ApiTags("app")
@Controller({
  version: "1",
  path: "app-category",
})
export class AppCategoryController {
  constructor(private readonly appCategoryService: AppCategoryService) {}

  @Get("/")
  findAllCategories(): Promise<AppCategory[]> {
    return this.appCategoryService.findAll()
  }
}
