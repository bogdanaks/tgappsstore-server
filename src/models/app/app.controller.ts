import { Controller, Get, Param, Query, UseInterceptors } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ResponseInterceptor } from "src/common/response.interceptor"

import { AppService } from "./app.service"
import { App, AppStatus } from "./entities/app.entity"

@ApiTags("app")
@UseInterceptors(ResponseInterceptor)
@Controller({
  version: "1",
  path: "app",
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  findAllApps(
    @Query("categoryId") categoryId: string,
    @Query("page") page: number,
    @Query("limit") limit: number,
  ): Promise<{
    data: App[],
    page: number,
    limit: number,
    total: number,
  }> {
    return this.appService.findAllApps({
      categoryId,
      page,
      limit,
    })
  }

  @Get("/search")
  findSearch(
    @Query("query") query: string,
    @Query("page") page: number,
    @Query("limit") limit: number,
  ): Promise<{
    data: App[],
    page: number,
    limit: number,
    total: number,
  }> {
    return this.appService.findSearch({
      query,
      page,
      limit,
    })
  }

  @Get(":id")
  findOneApp(@Param("id") id: string): Promise<App> {
    return this.appService.findOneApp(id)
  }
}
