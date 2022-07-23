import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { entitiesProviders } from "src/providers/database/entities.providers"

import { AppController } from "./app.controller"
import { AppService } from "./app.service"

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ...entitiesProviders],
  exports: [AppService],
})
export class AppModule {}
