/* eslint-disable no-console */

/**
 * Examples for database usages: https://github.com/neo4j-examples/nodejs-neo4j-realworld-example/blob/master/src/app.js
 */

import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import routes from "./routes/movies";

const router: Express = express();

import dotenv from "dotenv";

dotenv.config();

/** Logging */
router.use(morgan("dev"));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

// // Bind Neo4j to the request
// router.use((req, res, next) => {
//   req.neo4j = neo4j;
//   next();
// });

/** RULES OF OUR API */
router.use((req, res, next) => {
  // set the CORS policy
  res.header("Access-Control-Allow-Origin", "*");
  // set the CORS headers
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept, Authorization"
  );
  // set the CORS method headers
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
    return res.status(200).json({});
  }
  next();
});

/** Routes */
router.use("/", routes);

/** Error handling */
router.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message
  });
});

/** Server */
const httpServer = http.createServer(router);

const PORT: any = process.env.PORT ?? 8000;

httpServer.listen(PORT, () => console.log(`The server is running on port ${process.env.PORT}`));
