import { CreateUsersDTO } from './dto/CreateUsers';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
  async register(name): Promise<string> {
    return `Cliente ${name} com sucesso!`;
  }
}
