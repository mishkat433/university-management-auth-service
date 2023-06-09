import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
import path from 'path';
import globalErrorHandlers from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

// import ApiError from './Errors/ApiErrors'

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

export default app;
