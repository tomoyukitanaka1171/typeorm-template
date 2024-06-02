import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  engine: "InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin",
})
export class Prefectures {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: "name_kana" })
  nameKana: string;
}
