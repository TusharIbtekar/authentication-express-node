import { User } from "./entity/User";
import { DataSource } from "typeorm";

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DATABASE } = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DATABASE,
  synchronize: true,
  logging: true,
  entities: ["./src/entity/*.ts"],
  subscribers: [],
  migrations: [],
});
