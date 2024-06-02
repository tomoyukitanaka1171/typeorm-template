import { DataSource } from "typeorm";
import { Poets } from "../model/Poet";

export const createPoet = async (source: DataSource, poet: Poets) => {
  const result = await source.getRepository(Poets).save(poet);
  return result;
};
