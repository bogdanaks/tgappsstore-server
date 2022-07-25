import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { ServeStaticModule } from "@nestjs/serve-static"
import { join } from "path"

import { AppModule } from "../app/app.module"
import { AppCategoryModule } from "../app-category/app-category.module"
import { AppOpeningModule } from "../app-opening/app-opening.module"
import { AppTypeModule } from "../app-type/app-type.module"
import { DeveloperModule } from "../developer/developer.module"
import { FavoriteModule } from "../favorite/favorite.module"
import { RecommendationModule } from "../recommendation/recommendation.module"
import { UserModule } from "../user/user.module"
import { MainController } from "./main.controller"
import { MainService } from "./main.service"

@Module({
  imports: [ConfigModule.forRoot(),
    AppModule, DeveloperModule,
    AppTypeModule,
    AppCategoryModule,
    UserModule,
    FavoriteModule,
    AppOpeningModule,
    RecommendationModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../../../", "public/app-images"),
      serveStaticOptions: {
        cacheControl: true,
        dotfiles: "ignore",
        maxAge: 86400,
      }
    }),
  ],
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule {}
