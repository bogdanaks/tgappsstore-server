import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { entitiesProviders } from "src/providers/database/entities.providers"

import { RecommendationController } from "./recommendation.controller"
import { RecommendationService } from "./recommendation.service"

@Module({
  imports: [DatabaseModule],
  controllers: [RecommendationController],
  providers: [RecommendationService, ...entitiesProviders],
  exports: [RecommendationService],
})
export class RecommendationModule {}
