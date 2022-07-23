import { Column, CreateDateColumn, Entity, JoinColumn,OneToOne,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

import { App } from "../../app/entities/app.entity"
import { RecommendationCategory } from "./recommendation-category.entity"

@Entity({ name: "recommendation_apps" })
export class RecommendationApp {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  app_id: string

  @OneToOne(() => App)
  @JoinColumn({ name: "app_id" })
  app: App

  @Column()
  category_id: string

  @OneToOne(() => RecommendationCategory)
  @JoinColumn({ name: "category_id" })
  category: RecommendationCategory

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
