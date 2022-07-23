import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class AddFavoriteDto {
  @IsString()
  @ApiProperty()
  app_id: string
}

export class DelFavoriteDto {
  @IsString()
  @ApiProperty()
  app_id: string
}
