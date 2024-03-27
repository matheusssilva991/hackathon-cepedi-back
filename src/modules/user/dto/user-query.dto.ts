import { Type } from 'class-transformer';
import { IsOptional, IsNumber, IsPositive } from 'class-validator';

export class UserQueryDto {
  @IsOptional({ message: 'Nome é opcional.' })
  name?: string;

  @IsOptional({ message: 'Endereço é opcional.' })
  address?: number;

  @IsOptional({ message: 'Limite é opcional.' })
  @IsNumber({}, { message: 'Limite deve ser um número.' })
  @IsPositive({ message: 'Limite deve ser positivo.' })
  @Type(() => Number)
  limit?: number;

  @IsOptional({ message: 'Página é opcional.' })
  @IsNumber({}, { message: 'Página deve ser um número.' })
  @IsPositive({ message: 'Página deve ser positiva.' })
  @Type(() => Number)
  page?: number;

  @IsOptional({ message: 'Ordenação é opcional.' })
  sort?: string;
}
