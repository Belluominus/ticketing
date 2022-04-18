import { inject, injectable } from 'tsyringe';

import { DatabaseConnectionError } from '../../../shared/errors/DatabaseConnectionError';

interface IRequest {
  email: string;
  password: string;
}
interface IRespnse {
  email: string;
  password: string;
}

@injectable()
class SingUpUseCase {
  async execute({ email, password }: IRequest): Promise<IRespnse> {
    throw new DatabaseConnectionError();

    return { email, password };
  }
}

export { SingUpUseCase };
