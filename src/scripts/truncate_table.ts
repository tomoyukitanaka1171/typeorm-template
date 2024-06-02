import { DataSource } from "typeorm";
import { Poets } from "../model/Poet";
import { Haiku } from "../model/Haiku";
import { Kigo } from "../model/Kigo";
import { Prefectures } from "../model/Prefectures";
import { Users } from "../model/Users";


export const trauncateTable = async (dataSource: DataSource) => {
  await dataSource.getRepository(Poets).clear();
  await dataSource.getRepository(Haiku).clear();
  await dataSource.getRepository(Kigo).clear();
  await dataSource.getRepository(Prefectures).clear();
  await dataSource.getRepository(Users).clear();
};
