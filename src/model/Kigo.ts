import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import type { Relation } from "typeorm";
import { Haiku } from "./Haiku";

export enum Season {
  WINTER = "winter",
  FALL = "fall",
  NEWYEAR = "newyear",
  SUMMER = "summer",
  SPRING = "spring",
}

@Entity({
  engine: "InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin",
})
export class Kigo {
  @PrimaryGeneratedColumn()
  id: number;

  @Index("uniq_kigo_name", { unique: true })
  @Column()
  name: string;

  @Column({ nullable: true, name: "name_kana" })
  nameKana: string;

  @Column({ type: "enum", enum: Season, nullable: true })
  season?: Season;

  @ManyToMany(() => Haiku, (haiku) => haiku.kigo, {
    cascade: true,
  })
  haikus: Relation<Haiku[]>;
}
