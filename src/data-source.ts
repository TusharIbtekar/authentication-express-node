import { User } from "./entity/User";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_PASSWORD, DATABASE, DB_HOST, DB_PORT } = process.env;

const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST || "localhost",
  port: DB_PORT ? parseInt(DB_PORT) : 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DATABASE,
  synchronize: true,
  logging: true,
  entities: ["./src/entity/*.ts"],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("AppDataSource initialized");
  })
  .catch((error) => {
    console.log(error);
  });

export default AppDataSource;
