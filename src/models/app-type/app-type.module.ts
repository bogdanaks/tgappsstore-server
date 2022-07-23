import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { entitiesProviders } from "src/providers/database/entities.providers"

import { AppTypeController } from "./app-type.controller"
import { AppTypeService } from "./app-type.service"

@Module({
  imports: [DatabaseModule],
  controllers: [AppTypeController],
  providers: [
    AppTypeService, ...entitiesProviders
  ],
  exports: [AppTypeService],
})
export class AppTypeModule {}
