/* eslint-disable no-console */

/**
 * Examples for database usages: https://github.com/neo4j-examples/nodejs-neo4j-realworld-example/blob/master/src/app.js
 */

import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import config from "./config";
import cors from "cors";
import helmet from "helmet";

import routes from "./routes/movies";

const app: Express = express();

app.use(helmet());

app.use(cors());

/** Logging */
app.use(morgan("dev"));
/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
app.use(express.json());

/** RULES OF OUR API */
app.use((req, res, next) => {
  // set the CORS policy
  res.header("Access-Control-Allow-Origin", "*");
  // set the CORS headers
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept, Authorization"
  );
  // set the CORS method headers
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
    return res.status(200).json({});
  }
  next();
});

/** Routes */
app.use("/", routes);

/** Error handling */
app.use((req, res, next) => {
  const error = new Error("not found");

  return res.status(404).json({
    message: error.message
  });
});

/** Server */
const httpServer = http.createServer(app);

const PORT: any = config.api.port ?? 8000;

httpServer.listen(PORT, () => console.log(`The server is running on port ${process.env.PORT}`));
