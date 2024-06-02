import { HaikuRepository } from "../datasources/repository/haiku_repository";

export const fetchHaikus = async ({
  repository,
  limit,
  after,
}: {
  repository: HaikuRepository;
  limit: number;
  after: number;
}) => {
  const result = await repository.fetchHaikusWithPaging({
    limit: limit,
    after: after,
  });

  if (!result) {
    return [];
  }

  return {
    edges: result.map((r) => {
      return {
        node: r,
        cursor: r.id.toString(),
      };
    }),
    pageInfo: {
      hasNextPage: true,
      hasPreviousPage: true,
      // TODO: 必要可否を検討次第削除してください
      startCursor: "",
      endCursor: "",
    },
  };
};
