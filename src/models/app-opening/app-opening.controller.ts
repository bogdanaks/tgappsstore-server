import { Body, Controller, Headers, Post, ValidationPipe } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"

import { AppOpening } from "./app-opening.entity"
import { AppOpeningService } from "./app-opening.service"
import { AddOpeningDto } from "./dto/add-opening.dto"

@ApiTags("app-viewer")
@Controller({
  version: "1",
  path: "app-viewer",
})
export class AppOpeningController {
  constructor(private readonly appOpeningService: AppOpeningService) {}

  @Post("/")
  addOpening(
    @Body(new ValidationPipe()) addOpening: AddOpeningDto,
    @Headers("tg_user_id") tg_user_id: string,
  ): Promise<AppOpening> {
    return this.appOpeningService.createAppOpening({ app_id: addOpening.app_id, user_id: tg_user_id })
  }
}
