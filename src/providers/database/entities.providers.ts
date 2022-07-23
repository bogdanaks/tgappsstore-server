import { App } from "src/models/app/entities/app.entity"
import { AppCategory } from "src/models/app-category/app-category.entity"
import { AppOpening } from "src/models/app-opening/app-opening.entity"
import { AppType } from "src/models/app-type/app-type.entity"
import { Favorite } from "src/models/favorite/favorite.entity"
import { RecommendationApp } from "src/models/recommendation/entities/recommendation-app.entity"
import { RecommendationCategory } from "src/models/recommendation/entities/recommendation-category.entity"
import { DataSource } from "typeorm"

export const entitiesProviders = [
  {
    provide: "APP_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(App),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "APP_TYPES_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AppType),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "APP_CATEGORIES_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AppCategory),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "APP_OPENING_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AppOpening),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "FAVORITE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Favorite),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "RECOMMENDATION_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RecommendationApp),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "RECOMMENDATION_CATEGORY_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RecommendationCategory),
    inject: ["DATA_SOURCE"],
  },
]