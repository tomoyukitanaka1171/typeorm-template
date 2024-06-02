import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import type { Relation } from "typeorm";
import { Poets } from "./Poet";
import { Kigo } from "./Kigo";

@Entity({
  engine: "InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin",
})
@Unique(["text"])
export class Haiku {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ name: "text_kana" })
  textKana: string;

  @ManyToOne(() => Poets, (poet) => poet.letters, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: "poet" })
  author: Relation<Poets>;

  @ManyToMany(() => Kigo, { createForeignKeyConstraints: false })
  @JoinTable()
  kigo: Kigo[];

  @Column({ nullable: true })
  description?: string;

  @Column({ name: "likes_count", nullable: true })
  likesCount?: number;
}
