import { DataSource } from "typeorm";
import kigo from "./json/kigo.json" with { type: "json" };
import sanitized from "./json/sanitized/sanitize_kigo.json" with { type: "json" };
import { Kigo, Season } from "../model/Kigo";

export const insertKigos = (source: DataSource) => {
  const json = Array.from(
    new Map(kigo.map((user) => [user.name, user])).values(),
  );
  const kigos = json.map((j) => {
    const kigo = new Kigo();
    kigo.name = j.name;
    kigo.nameKana = j.name_kana;
    return kigo;
  });
  source.getRepository(Kigo).save(kigos);
};

export const insertSanitizedKigos = async (source: DataSource) => {
  const first = await source.getRepository(Kigo).find({
    where: {
      name: "春",
    },
  });

  console.log(first);

  if (first.length !== 0) return;

  const json = Array.from(
    new Map(sanitized.map((user) => [user.name, user])).values(),
  );
  console.log(json);
  const kigos = json.map((j) => {
    const kigo = new Kigo();
    kigo.name = j.name;
    kigo.nameKana = j.name_kana;
    kigo.season = j.season as Season;
    return kigo;
  });
  source.getRepository(Kigo).save(kigos);
};
