import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEmpty,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'O campo nome deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio.' })
  name: string;

  @IsString({ message: 'O campo cpf deve ser uma string.' })
  @IsOptional({ message: 'O campo cpf é opcional.' })
  cpf?: string;

  @IsString({ message: 'O campo cnpj deve ser uma string.' })
  @IsOptional({ message: 'O campo cnpj é opcional.' })
  cnpj?: string;

  @IsEmail({}, { message: 'O campo e-mail deve ser um email válido.' })
  @IsNotEmpty({ message: 'O campo e-mail não pode ser vazio.' })
  email: string;

  @IsString({ message: 'O campo senha deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo senha não pode ser vazio.' })
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

  @IsInt({ message: 'O campo addressId deve ser um número inteiro.' })
  @IsOptional({ message: 'O campo addressId é opcional.' })
  @Transform(({ value }) => parseInt(value))
  addressId?: number;

  @IsEmpty({ message: 'O campo createdAt não deve ser preenchido.' })
  createdAt: Date;

  @IsEmpty({ message: 'O campo updatedAt não deve ser preenchido.' })
  updatedAt: Date;
}
