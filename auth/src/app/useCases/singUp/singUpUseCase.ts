import jwt from 'jsonwebtoken';
import { injectable } from 'tsyringe';

import { User } from '../../../models/user';
import { BadRequestError } from '../../../shared/errors/BadRequestError';

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: {
    id: string;
    email: string;
    password: string;
  };
  userToken: string;
}

@injectable()
class SingUpUseCase {
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const user = User.build({ email, password });

    await user.save();

    const userToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      'asdf',
    );

    const userResponse = {
      user: {
        id: user.id,
        email: user.email,
        password: user.password,
      },
      userToken,
    };

    return userResponse;
  }
}

export { SingUpUseCase };
