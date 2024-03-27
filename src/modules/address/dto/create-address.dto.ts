import { Transform } from 'class-transformer';
import {
  IsEmpty,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateAddressDto {
  @IsString({ message: 'O campo rua deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo rua não pode ser vazio.' })
  street: string;

  @IsString({ message: 'O campo bairro deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo bairro não pode ser vazio.' })
  neighborhood: string;

  @IsString({ message: 'O campo complemento deve ser uma string.' })
  @IsOptional({ message: 'O campo complemento é opcional.' })
  complement?: string;

  @IsString({ message: 'O campo cidade deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo cidade não pode ser vazio.' })
  city: string;

  @IsString({ message: 'O campo estado deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo estado não pode ser vazio.' })
  state: string;

  @IsString({ message: 'O campo cep deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo cep não pode ser vazio.' })
  postalCode: string;

  @IsString({ message: 'O campo número deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo número não pode ser vazio.' })
  number: string;

  @IsInt({
    message: 'O campo quantidade de pessoas deve ser um número inteiro.',
  })
  @IsPositive({
    message: 'O campo quantidade de pessoas deve ser um número positivo.',
  })
  @IsNotEmpty({ message: 'O campo quantidade de pessoas não pode ser vazio.' })
  @Transform(({ value }) => parseInt(value))
  amountPeople: number;

  @IsString({ message: 'O campo cadUnico deve ser uma string.' })
  @IsOptional({ message: 'O campo cadUnico é opcional.' })
  cadUnico?: string;

  @IsEmpty({ message: 'O campo createdAt não deve ser preenchido.' })
  createdAt: Date;

  @IsEmpty({ message: 'O campo updatedAt não deve ser preenchido.' })
  updatedAt: Date;
}
