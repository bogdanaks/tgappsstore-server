import { Column, CreateDateColumn, Entity, JoinColumn,OneToOne,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

import { AppCategory } from "../../app-category/app-category.entity"
import { AppType } from "../../app-type/app-type.entity"

export enum AppStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  REVIEWING = "reviewing",
  CANCELED = "canceled",
}

@Entity({ name: "apps" })
export class App {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 100 })
  title: string

  @Column({ length: 150 })
  short_description: string

  @Column({ length: 1000 })
  description: string

  @Column("text")
  image_url: string

  @Column()
  creator_id: string

  @Column()
  link: string

  @Column()
  category_id: string

  @OneToOne(() => AppCategory)
  @JoinColumn({ name: "category_id" })
  category: AppCategory

  @Column()
  type_id: string

  @OneToOne(() => AppType)
  @JoinColumn({ name: "type_id" })
  type: AppType

  @Column({
    type: "enum",
    enum: AppStatus,
    default: AppStatus.DRAFT
  })
  status: AppStatus

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
