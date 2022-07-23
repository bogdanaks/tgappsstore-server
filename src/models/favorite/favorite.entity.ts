import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

import { App } from "../app/entities/app.entity"

@Entity({ name: "favorites" })
export class Favorite {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 20 })
  tg_user_id: string

  @Column()
  app_id: string

  @OneToOne(() => App)
  @JoinColumn({ name: "app_id" })
  app: App

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}