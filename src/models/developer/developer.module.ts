import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"

import { AppModule } from "../app/app.module"
import { DeveloperController } from "./developer.controller"
import { DeveloperService } from "./developer.service"

@Module({
  imports: [DatabaseModule, AppModule],
  controllers: [DeveloperController],
  providers: [DeveloperService]
})
export class DeveloperModule {}
