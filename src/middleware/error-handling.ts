import { Request, Response, NextFunction } from 'express';

import { GeneralError, sendError, isGeneralError } from '../helpers/errors';

export const errorHandlingMiddleware = async (
  error: GeneralError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!error) {
    next();
  }

  if (isGeneralError(error)) {
    return sendError(error, res);
  }

  return sendError(
    {
      message: 'Unknown Error',
      name: 'UnknownError',
      statusCode: 500
    },
    res
  );
};
