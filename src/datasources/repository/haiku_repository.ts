import { DataSource, In, MoreThan, Repository } from "typeorm";
import { Haiku } from "../../model/Haiku";
import { injectable, inject } from "inversify";
import { TYPES } from "./types";

@injectable()
export class HaikuRepository {
  datasorce: DataSource;

  private repository: Repository<Haiku>;

  constructor(@inject(TYPES.DataSource) datasorce: DataSource) {
    this.repository = datasorce.getRepository(Haiku);
  }

  async fetchHaikus() {
    return await this.repository.find({
      relations: {
        author: true,
        kigo: true,
      },
    });
  }

  async fetchHaikusByIds({ ids }: { ids: number[] }) {
    return await this.repository.find({
      where: {
        id: In(ids),
      },
      relations: {
        author: true,
        kigo: true,
      },
    });
  }

  async fetchHaikusWithPaging({
    limit,
    after,
  }: {
    limit: number;
    after: number;
  }) {
    return await this.repository.find({
      take: limit,
      where: {
        id: MoreThan(after),
      },
      relations: {
        author: true,
        kigo: true,
      },
    });
  }
}
