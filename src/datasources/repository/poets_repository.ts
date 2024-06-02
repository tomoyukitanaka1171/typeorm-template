import { DataSource, Repository } from "typeorm";
import { Poets } from "../../model/Poet";

export class PoetsRepository {
  datasorce: DataSource;

  private repository: Repository<Poets>;

  constructor(datasorce: DataSource) {
    this.repository = datasorce.getRepository(Poets);
  }

  async fetchPoets() {
    return await this.repository.find();
  }

  async createPoet({ poet }: { poet: Poets }) {
    return await this.repository.save(poet);
  }
}
