import { NextFunction, Request, Response } from 'express';

import { DatabaseConnectionError } from '../errors/DatabaseConnectionError';
import { RequestValidationErrors } from '../errors/RequestValidationErrors';

const errorHandler = (err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof RequestValidationErrors) {
    return response.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  if (err instanceof DatabaseConnectionError) {
    return response.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  return response.status(500).send({ errors: [{ message: `Internal server error ${err.message}` }] });
};

export { errorHandler };
