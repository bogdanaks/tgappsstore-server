import { AppStatus } from "./entities/app.entity"

export interface AppCreateProps {
  title: string
  short_description: string
  description: string
  type_id: string
  category_id: string
  creator_id: string
  link: string
  image_url: string
  status: AppStatus
}
