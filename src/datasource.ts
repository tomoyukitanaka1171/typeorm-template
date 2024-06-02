import { DataSource } from "typeorm";
import { Users } from "./model/Users";
import { Prefectures } from "./model/Prefectures";
import { Poets } from "./model/Poet";
import { Kigo } from "./model/Kigo";
import { Haiku } from "./model/Haiku";
import dotenv from "dotenv";

dotenv.config();

export const dataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Users, Prefectures, Poets, Kigo, Haiku],
  synchronize: true,
  logging: false,
  charset: "utf8mb4",
});
