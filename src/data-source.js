const { DataSource } = require("typeorm");

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DATABASE } = process.env;

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DATABASE,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});

exports.AppDataSource = AppDataSource;
