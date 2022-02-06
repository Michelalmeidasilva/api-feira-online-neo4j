import { Response } from 'express';

export interface GeneralError extends Error {
  name: string;
  message: string;
  deleted?: boolean;
  statusCode: number;
}

// The function isGeneralError is a user defined type guard
// the return type: 'error is a GeneralError?' is a type predicate,
// it determines whether the object is a General Error
export function isGeneralError(error: object): error is GeneralError {
  return (error as GeneralError) !== undefined;
}

export const NotFound = (
  message = "The requested resource couldn't be found"
): GeneralError => ({
  name: 'NotFound',
  message,
  statusCode: 404
});

export const BadRequest = (
  message = 'The json data is malformed'
): GeneralError => ({
  name: 'BadRequest',
  message,
  statusCode: 400
});

export const InternalServerError = (
  message = 'The API did something wrong'
): GeneralError => ({
  name: 'InternalServerError',
  message,
  statusCode: 500
});

export const Unauthorized = (
  message = 'Incorrect username or password'
): GeneralError => ({
  name: 'Unauthorized',
  message,
  statusCode: 401
});

export const NotContent = (message = 'Not content'): GeneralError => ({
  name: 'NotContent',
  message,
  statusCode: 204
});

export const Deleted = (message = 'Successfully deleted'): GeneralError => ({
  name: 'Deleted',
  message,
  deleted: true,
  statusCode: 200
});

export const sendError = (err: GeneralError, res: Response) => {
  return res.status(err.statusCode).send({
    message: err.message,
    typeError: err.name,
    statusCode: err.statusCode
  });
};
