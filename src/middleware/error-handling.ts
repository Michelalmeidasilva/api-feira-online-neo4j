import { Request, Response, NextFunction } from "express";

import { GeneralError, NotContent, InternalServerError, sendError } from "../helpers/errors";

export const errorHandlingMiddleware = async (
  error: GeneralError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof NotContent) {
    return sendError(error, res);
  }

  if (error instanceof InternalServerError) {
    return sendError(error, res);
  }

  return sendError(
    {
      message: "Unknown Error",
      name: "UnknownError",
      statusCode: 500
    },
    res
  );
};
