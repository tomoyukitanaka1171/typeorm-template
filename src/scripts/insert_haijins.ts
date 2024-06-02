import { DataSource } from "typeorm";
import { Poets } from "../model/Poet";
import haijins from "./json/haijins.json" with { type: "json" };

export const insertHaijins = async (source: DataSource) => {
  const first = await source.getRepository(Poets).find({
    where: {
      id: 1,
    },
  });

  if (first) return;

  const json = haijins;
  const poets = json.map((j) => {
    const poets = new Poets();
    poets.name = j.name;
    poets.nameKana = j.name_kana;
    poets.gender = String(j.gender);
    poets.birthYear = Number(j.birth_year);
    poets.diedYear = Number(j.died_year);
    return poets;
  });
  source.getRepository(Poets).save(poets);
};
