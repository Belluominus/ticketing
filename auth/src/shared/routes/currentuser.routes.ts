import { Router } from 'express';

const currentUserRouter = Router();

currentUserRouter.get('/');

export { currentUserRouter };
