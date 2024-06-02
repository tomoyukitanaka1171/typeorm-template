import { fetchPoets } from "../controller/fetch_poets";
import { fetchHaikus } from "../controller/fetch_haikus";
import { poetReposiory } from "..";
import container from "../inversify.config";

import { HaikuRepository } from "../datasources/repository/haiku_repository";
import { TYPES } from "../datasources/repository/types";

export const createResolvers = () => {
  return {
    Query: {
      // users: () => fetchUsers(),
      haikus: async (_: string, input: { limit: number; after: number }) =>
        await fetchHaikus({
          repository: container.get<HaikuRepository>(TYPES.HaikuRepository),
          limit: input.limit,
          after: input.after,
        }),
      poets: async () =>
        await fetchPoets({
          repository: poetReposiory,
        }),
    },
    Mutation: {
      // Todo: Implements Haiku
      // createHaiku: async (
      //   _,
      //   {
      //     penname,
      //     poetId,
      //     letterBody,
      //     letterBodyType,
      //     address,
      //     age,
      //     imageUrl,
      //     description,
      //   }
      // ) =>
      //   await createHaiku(source, {
      //     penname: penname,
      //     poetId: poetId,
      //     letterBody: letterBody,
      //     letterBodyType: letterBodyType,
      //     address: address,
      //     age: age,
      //     imageUrl: imageUrl,
      //     description: description,
      //   }),
      // likeLetter: async (_, { id }) =>
      //   await likeLetter(source, {
      //     id: id,
      //   }),
    },
  };
};
