import { Controller, Get } from "@nestjs/common"

import { MainService } from "./main.service"

@Controller({
  version: "1",
})
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Get("/status")
  getStatus(): string {
    return this.mainService.getStatus()
  }
}
