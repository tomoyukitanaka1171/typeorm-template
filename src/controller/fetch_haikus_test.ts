// import { describe, test, mock } from "node:test";

// TODO: テスト用のDBを用意してfixturesで定義する
// const dataSource = new DataSource({
//   type: "mysql",
//   host: process.env.DB_HOST,
//   port: 3306,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   entities: [Users, Prefectures, Poets, Kigo, Haiku],
//   synchronize: true,
//   logging: false,
//   charset: "utf8mb4",
// });

// TODO: ECMで不安定でテストが通らないのでMochaに切り替える
// see https://mochajs.org/
// test("俳句が期待通り取得できること", () => {
//   fetchHaikus({
//     repository: new HaikuRepository({datasorce: DataSource.}),
//     limit: 50,
//     after: 10,
//   });
// });
