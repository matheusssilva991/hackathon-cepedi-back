import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'O campo name deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo name não pode ser vazio.' })
  name: string;

  @IsString({ message: 'O campo cpf deve ser uma string.' })
  cpf: string;

  @IsString({ message: 'O campo cnpj deve ser uma string.' })
  cnpj: string;

  @IsDate({ message: 'O campo birthDate deve ser uma data.' })
  @IsNotEmpty({ message: 'O campo birthDate não pode ser vazio.' })
  @Transform(({ value }) => new Date(value).toISOString())
  birthDate: string;

  @IsEmail({}, { message: 'O campo email deve ser um email válido.' })
  @IsNotEmpty({ message: 'O campo email não pode ser vazio.' })
  email: string;

  @IsString({ message: 'O campo password deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo password não pode ser vazio.' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'A senha deve conter pelo menos 8 caracteres, um número, uma letra maiúscula, \
         uma letra minúscula e um simbolo.',
    },
  )
  password: string;
}
