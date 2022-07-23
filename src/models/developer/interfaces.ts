export interface CreateAppProps {
  title: string
  short_description: string
  description: string
  type_id: string
  category_id: string
  creator_id: string
  link: string
  image: Express.Multer.File
}
