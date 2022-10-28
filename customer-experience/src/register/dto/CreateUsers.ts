import {
  IsString,
  IsNotEmpty,
  IsNumberString,
  IsEmail,
} from 'class-validator';

export class CreateUsersDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumberString()
  @IsNotEmpty()
  password: number;

  @IsString()
  @IsNotEmpty()
  site: string;

  @IsNumberString()
  phone: number;
}
