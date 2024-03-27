import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class ConsumptionQueryDto {
  @IsOptional({ message: 'Ano é opcional.' })
  year?: number;

  @IsOptional({ message: 'Mês é opcional.' })
  month?: number;

  @IsOptional({ message: 'Dia é opcional.' })
  day?: string;

  @IsOptional({ message: 'Hora é opcional.' })
  hour?: number;

  @IsOptional({ message: 'Consumo é opcional.' })
  consumption?: number;

  @IsOptional({ message: 'Padrão é opcional.' })
  pattern?: string;

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
