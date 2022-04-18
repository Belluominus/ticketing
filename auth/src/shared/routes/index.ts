import { Router } from 'express';

import { currentUserRouter } from './currentuser.routes';
import { signInRouter } from './signin.routes';
import { signOutRouter } from './signout.routes';
import { signUpRouter } from './signup.routes';

const routes = Router();

routes.use('/api/users/currentuser', currentUserRouter);
routes.use('/api/users/signin', signInRouter);
routes.use('/api/users/signout', signOutRouter);
routes.use('/api/users/signup', signUpRouter);

export { routes };
