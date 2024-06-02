import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Haiku } from "./Haiku";
import type { Relation } from "typeorm";

@Entity({
  engine: "InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin",
})
// @Unique(["name"])
@Index(["name"])
export class Poets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, name: "name_kana" })
  nameKana: string;

  @Column({ nullable: true })
  gender: string;

  @OneToMany(() => Haiku, (haiku) => haiku.author)
  @JoinColumn()
  letters: Relation<Haiku[]>;

  @Column({ nullable: true, name: "birth_year" })
  birthYear: number;

  @Column({ nullable: true, name: "died_year" })
  diedYear: number;
}
