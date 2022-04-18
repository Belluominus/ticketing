import { ValidationError } from 'express-validator';

export class RequestValidationErrors extends Error {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super();

    Object.setPrototypeOf(this, RequestValidationErrors.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}