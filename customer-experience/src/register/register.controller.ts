import { CreateUserDto } from './dto/CreateUser';
import { UpdateRegisterDto } from './dto/UpdateUser';
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async register(@Body() req: CreateUserDto): Promise<string> {
    return this.registerService.register(req);
  }
}
