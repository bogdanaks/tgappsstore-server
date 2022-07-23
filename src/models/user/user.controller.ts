import { Controller } from "@nestjs/common"
import { ApiTags,  } from "@nestjs/swagger"

import { UserService } from "./user.service"

@ApiTags("user")
@Controller({
  version: "1",
  path: "user",
})
export class UserController {
  constructor(private readonly userService: UserService) {}
}
