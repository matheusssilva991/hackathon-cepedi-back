import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class AddressQueryDto {
  @IsOptional({ message: 'Rua é opcional.' })
  street?: string;

  @IsOptional({ message: 'Bairro é opcional.' })
  neighborhood?: string;

  @IsOptional({ message: 'Cidade é opcional.' })
  city?: string;

  @IsOptional({ message: 'Estado é opcional.' })
  state?: string;

  @IsOptional({ message: 'CEP é opcional.' })
  postalCode?: string;

  @IsOptional({ message: 'Número é opcional.' })
  number?: string;

  @IsOptional({ message: 'Quantidade de pessoas é opcional.' })
  amountPeople?: number;

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
