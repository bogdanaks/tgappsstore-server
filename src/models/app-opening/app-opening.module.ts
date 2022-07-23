import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { entitiesProviders } from "src/providers/database/entities.providers"

import { AppModule } from "../app/app.module"
import { AppOpeningController } from "./app-opening.controller"
import { AppOpeningService } from "./app-opening.service"

@Module({
  imports: [DatabaseModule, AppModule],
  controllers: [AppOpeningController],
  providers: [AppOpeningService, ...entitiesProviders],
  exports: [AppOpeningService],
})
export class AppOpeningModule {}
