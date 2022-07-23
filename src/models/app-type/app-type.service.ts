import { Inject, Injectable } from "@nestjs/common"
import { Repository } from "typeorm"

import { AppType } from "./app-type.entity"

@Injectable()
export class AppTypeService {
  constructor(
    @Inject("APP_TYPES_REPOSITORY")
    private appTypesRepository: Repository<AppType>,
  ) {}

  findAll(): Promise<AppType[]> {
    return this.appTypesRepository.find()
  }

  findOne(id: string): Promise<AppType> {
    return this.appTypesRepository.findOne({ where: { id } })
  }
}
