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
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "A737TE",
        database: "tgappsstore",
        entities: [App, AppType, AppCategory, Favorite, AppOpening, RecommendationApp, RecommendationCategory],
        synchronize: false,
      })

      return dataSource.initialize()
    },
  },
]