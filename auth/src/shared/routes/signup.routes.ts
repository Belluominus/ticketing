import { Router } from 'express';

import { SingUpController } from '../../app/useCases/singUp/singUpController';
import { validateUser } from '../middlewares/validator/validateUser';

const signUpRouter = Router();

const singUpController = new SingUpController();

signUpRouter.post('/', validateUser, singUpController.handle);

export { signUpRouter };
