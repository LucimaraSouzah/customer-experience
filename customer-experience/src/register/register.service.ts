import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
  async register(req): Promise<string> {
    return `Cliente ${req.name} com sucesso!`;
  }
}
