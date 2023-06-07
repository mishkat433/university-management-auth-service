import mongoose from 'mongoose';
import { IGeniricErrorResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGeniricErrorResponse => {
  const error: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'validationError',
    errorMessage: error,
  };
};

export default handleValidationError;
