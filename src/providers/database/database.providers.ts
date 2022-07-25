import { ConfigService } from "@nestjs/config"
import { App } from "src/models/app/entities/app.entity"
import { AppCategory } from "src/models/app-category/app-category.entity"
import { AppOpening } from "src/models/app-opening/app-opening.entity"
import { AppType } from "src/models/app-type/app-type.entity"
import { Favorite } from "src/models/favorite/favorite.entity"
import { RecommendationApp } from "src/models/recommendation/entities/recommendation-app.entity"
import { RecommendationCategory } from "src/models/recommendation/entities/recommendation-category.entity"
import { DataSource } from "typeorm"

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: "postgres",
        host: configService.get("PG_HOST"),
        port: configService.get("PG_PORT"),
        username: configService.get("PG_USER"),
        password: configService.get("PG_PASSWORD"),
        database: configService.get("PG_DATABASE"),
        entities: [App, AppType, AppCategory, Favorite, AppOpening, RecommendationApp, RecommendationCategory],
        synchronize: false,
        ssl: {
          rejectUnauthorized: false,
        },
      })
      return dataSource.initialize()
    },
    inject: [ConfigService]
  },
]