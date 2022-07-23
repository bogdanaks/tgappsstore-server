import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

import { App } from "../app/entities/app.entity"

@Entity({ name: "apps_openings" })
export class AppOpening {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  app_id: string

  @OneToOne(() => App)
  @JoinColumn({ name: "app_id" })
  app: App

  @Column()
  user_id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
