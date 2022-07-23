import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { entitiesProviders } from "src/providers/database/entities.providers"

import { AppModule } from "../app/app.module"
import { FavoriteController } from "./favorite.controller"
import { FavoriteService } from "./favorite.service"

@Module({
  imports: [DatabaseModule, AppModule],
  controllers: [FavoriteController],
  providers: [FavoriteService, ...entitiesProviders],
  exports: [FavoriteService],
})
export class FavoriteModule {}
