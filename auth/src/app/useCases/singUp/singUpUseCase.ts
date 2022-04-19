import { inject, injectable } from 'tsyringe';

import { DatabaseConnectionError } from '../../../shared/errors/DatabaseConnectionError';

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
    throw new DatabaseConnectionError();

    return { email, password };
  }
}

export { SingUpUseCase };
