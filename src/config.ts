import dotenv from "dotenv";

dotenv.config();

const config = {
  neo4j: {
    url: process.env.URL_DATABASE,
    username: process.env.USERNAME_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    database: process.env.DATABASE_NAME
  },
  api: {
    port: process.env.PORT
  }
};

export default config;
