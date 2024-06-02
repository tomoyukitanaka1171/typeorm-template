import { DataSource } from "typeorm";
import haikus from "./json/haikus.json" with { type: "json" };
import { Kigo } from "../model/Kigo";
import { Haiku } from "../model/Haiku";
import { Poets } from "../model/Poet";

export const insertHaikus = async (source: DataSource) => {
  const first = await source.getRepository(Haiku).find({
    where: {
      id: 400,
    },
  });

  if (first.length !== 0) return;

  const json = Array.from(
    new Map(haikus.map((haiku) => [haiku.text, haiku])).values(),
  );
  (async () => {
    try {
      Promise.all(
        json.map(async (j) => {
          console.log(
            await source.getRepository(Kigo).find({
              where: {
                name: j.kigo,
              },
            }),
          );
          console.log(
            await source.getRepository(Poets).findOne({
              where: {
                name: j.author,
              },
            }),
          );
          const haikuEntity = new Haiku();
          haikuEntity.text = j.text;
          haikuEntity.textKana = j.text_kana;
          haikuEntity.kigo = await source.getRepository(Kigo).find({
            where: {
              name: j.kigo,
            },
          });
          haikuEntity.author = await source.getRepository(Poets).findOne({
            where: {
              name: j.author,
            },
          });
          haikuEntity.description = null;
          haikuEntity.likesCount = 0;
          console.log(haikuEntity);
          await source.getRepository(Haiku).save(haikuEntity);
        }),
      );
    } catch (e) {
      console.log(e);
    }
  })();
};
