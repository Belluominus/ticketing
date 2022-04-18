import 'reflect-metadata';
import 'express-async-errors';
import { json } from 'body-parser';
import express from 'express';

import { errorHandler } from './shared/middlewares/errorHandler';
import { routes } from './shared/routes';

const app = express();
app.use(json());

app.use(routes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
