import 'reflect-metadata';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import mongoose from 'mongoose';

import { NotFoundError } from './shared/errors/NotFoundError';
import { errorHandler } from './shared/middlewares/errorHandler';
import { routes } from './shared/routes';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  }),
);

app.use(routes);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const startUp = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });
};

startUp();
