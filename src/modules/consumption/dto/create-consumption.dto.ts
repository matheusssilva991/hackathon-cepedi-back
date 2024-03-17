import {
  IsEmpty,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { Pattern } from '../../../common/enum/pattern.enum';
import { Transform } from 'class-transformer';
import { Day } from '../../../common/enum/day.enum';

export class CreateConsumptionDto {
  @IsInt({ message: 'O ano deve ser um número inteiro válido.' })
  @IsPositive({ message: 'O ano deve ser um número inteiro positivo.' })
  @IsNotEmpty({ message: 'O ano é obrigatório.' })
  @Transform(({ value }) => parseInt(value))
  year: number;

  @IsInt({ message: 'O mês deve ser um número inteiro válido.' })
  @IsPositive({ message: 'O mês deve ser um número inteiro positivo.' })
  @IsNotEmpty({ message: 'O mês é obrigatório.' })
  @Transform(({ value }) => parseInt(value))
  month: number;

  @IsEnum(Day, { message: 'O padrão deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O dia é obrigatório.' })
  day: Day;

  @IsInt({ message: 'A hora deve ser um número inteiro válido.' })
  @IsPositive({ message: 'A hora deve ser um número inteiro positivo.' })
  @IsNotEmpty({ message: 'A hora é obrigatória.' })
  @Transform(({ value }) => parseInt(value))
  hour: number;

  @IsNumber({}, { message: 'O consumo deve ser um número válido.' })
  @IsPositive({ message: 'O consumo deve ser um número positivo.' })
  @IsNotEmpty({ message: 'O consumo é obrigatório.' })
  @Transform(({ value }) => parseFloat(value))
  consumption: number;

  @IsEnum(Pattern, { message: 'O padrão deve ser um texto válido.' })
  @IsOptional({ message: 'O padrão é opcional.' })
  pattern: Pattern;

  @IsInt({ message: 'O id do endereço deve ser um número inteiro válido.' })
  @IsPositive({
    message: 'O id do endereço deve ser um número inteiro positivo.',
  })
  @IsNotEmpty({ message: 'O id do endereço é obrigatório.' })
  @Transform(({ value }) => parseInt(value))
  addressId: number;

  @IsEmpty({ message: 'O campo createdAt deve estar vazio.' })
  createdAt: Date;

  @IsEmpty({ message: 'O campo updatedAt deve estar vazio.' })
  updatedAt: Date;
}
