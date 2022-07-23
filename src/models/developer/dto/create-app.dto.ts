import { ApiProperty } from "@nestjs/swagger"
import { IsString, MaxLength } from "class-validator"

export class CreateAppDto {
  @IsString()
  @MaxLength(100)
  @ApiProperty()
  title: string

  @IsString()
  @MaxLength(150)
  @ApiProperty()
  short_description: string

  @IsString()
  @MaxLength(1000)
  @ApiProperty()
  description: string

  @IsString()
  @ApiProperty()
  type_id: string

  @IsString()
  @ApiProperty()
  category_id: string

  @IsString()
  @ApiProperty()
  creator_id: string

  @IsString()
  @ApiProperty()
  link: string

  @ApiProperty({ isArray: false, format: "binary", type: "string" })
  image: Express.Multer.File
}
