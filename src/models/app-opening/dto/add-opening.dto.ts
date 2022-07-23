import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class AddOpeningDto {
  @IsString()
  @ApiProperty()
  app_id: string
}
