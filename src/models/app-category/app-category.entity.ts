import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: "app_categories" })
export class AppCategory {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 20 })
  title: string

  @Column({ length: 20 })
  slug: string

  @Column()
  icon: string

  @Column()
  priority: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}