import { injectable } from 'tsyringe';

import { User } from '../../../models/user';
import { BadRequestError } from '../../../shared/errors/BadRequestError';

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  email: string;
  password: string;
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

    return user;
  }
}

export { SingUpUseCase };
