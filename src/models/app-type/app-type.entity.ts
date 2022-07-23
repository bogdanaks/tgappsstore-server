import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: "app_types" })
export class AppType {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 20 })
  title: string

  @Column({ length: 20 })
  slug: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}