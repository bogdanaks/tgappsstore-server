import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: "recommendation_categories" })
export class RecommendationCategory {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  title: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
