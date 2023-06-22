import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
import path from 'path';
import globalErrorHandlers from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1', routes);

// server running test route
app.get('/', async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + '/index.html'));

  // Promise.reject(new Error('unhandled promise rejection'))
});

// global error handler
app.use(globalErrorHandlers);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Invalid url',
      },
    ],
  });
  next();
});

export default app;
