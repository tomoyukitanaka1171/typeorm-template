import { UserRepository } from "../datasources/repository/user_repository";

export const fetchUsers = ({
  userReposiory,
}: {
  userReposiory: UserRepository;
}) => {
  return userReposiory.fetchUsers();
};
