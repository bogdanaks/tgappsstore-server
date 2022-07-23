import { Controller, Get } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"

import { AppType } from "./app-type.entity"
import { AppTypeService } from "./app-type.service"

@ApiTags("app")
@Controller({
  version: "1",
  path: "app-type",
})
export class AppTypeController {
  constructor(private readonly appTypeService: AppTypeService) {}

  @Get("/")
  findAllCategories(): Promise<AppType[]> {
    return this.appTypeService.findAll()
  }
}
