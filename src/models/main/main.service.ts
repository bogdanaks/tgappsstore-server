import { Injectable } from "@nestjs/common"

@Injectable()
export class MainService {
  getStatus(): string {
    return "OK!"
  }
}
