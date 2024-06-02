import { Container } from "inversify";
import { TYPES } from "./datasources/repository/types";
import { HaikuRepository } from "./datasources/repository/haiku_repository";
import { DataSource } from "typeorm";
import { dataSource } from "./datasource";

var container = new Container();
container.bind<DataSource>(TYPES.DataSource).toConstantValue(dataSource);
container.bind<HaikuRepository>(TYPES.HaikuRepository).to(HaikuRepository);
export default container;
