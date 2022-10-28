import { CreateUsersDTO } from './dto/CreateUsers';
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async register(@Body() req: CreateUsersDTO): Promise<string> {
    return this.registerService.register(req);
  }
}
