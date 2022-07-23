import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { entitiesProviders } from "src/providers/database/entities.providers"

import { AppCategoryController } from "./app-category.controller"
import { AppCategoryService } from "./app-category.service"

@Module({
  imports: [DatabaseModule],
  controllers: [AppCategoryController],
  providers: [
    AppCategoryService, ...entitiesProviders
  ],
  exports: [AppCategoryService],
})
export class AppCategoryModule {}
