import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  engine: "InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin",
})
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;
}
