import { IGenericErrorMessage } from './error';

export type IGeniricErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage[];
};
