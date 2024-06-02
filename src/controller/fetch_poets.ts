
import { PoetsRepository } from "../datasources/repository/poets_repository";

export const fetchPoets = async ({
  repository,
}: {
  repository: PoetsRepository;
}) => {
  console.log("start fetchPoets");

  const result = await repository.fetchPoets();

  console.log(result);
  return result;
};
