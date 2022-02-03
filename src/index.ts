/* eslint-disable no-console */

import express, { Express } from 'express';
import morgan from 'morgan';
import config from './config';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';
import { errorHandlingMiddleware } from './middleware/error-handling';

const app: Express = express();

app.use(helmet());

app.use(cors());

/** Logging */
app.use(morgan('dev'));
/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
app.use(express.json());

/** RULES OF OUR API */
app.use((req, res, next) => {
  // set the CORS policy
  res.header('Access-Control-Allow-Origin', '*');
  // set the CORS headers
  res.header(
    'Access-Control-Allow-Headers',
    'origin, X-Requested-With,Content-Type,Accept, Authorization'
  );
  // set the CORS method headers
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
    return res.status(200).json({});
  }
  next();
});

/** Routes */
app.use('/v1/', routes);
/** Error handling */
app.use(errorHandlingMiddleware);

/** Server */
app.listen(config.api.port ?? 8000, () =>
  console.log(`The server is running on port ${process.env.PORT}`)
);
