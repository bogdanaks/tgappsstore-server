import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/providers/database/database.module"
import { entitiesProviders } from "src/providers/database/entities.providers"

import { UserController } from "./user.controller"
import { UserService } from "./user.service"

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...entitiesProviders]
})
export class UserModule {}
