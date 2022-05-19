import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { SingUpUseCase } from './singUpUseCase';

class SingUpController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const singUpUseCase = container.resolve(SingUpUseCase);

    const singUpData = await singUpUseCase.execute({ email, password });

    request.session = {
      jwt: singUpData.userToken,
    };

    console.log(singUpData);

    return response.status(201).send(singUpData.user);
  }
}

export { SingUpController };
