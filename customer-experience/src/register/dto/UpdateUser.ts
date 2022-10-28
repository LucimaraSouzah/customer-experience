import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './CreateUser';

export class UpdateRegisterDto extends PartialType(CreateUserDto) {}