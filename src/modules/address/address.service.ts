import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { AddressQueryDto } from './dto/address-query.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    // Verifica se o cadUnico já existe
    await this.cadUnicoAlreadyExists(createAddressDto.cadUnico);

    return await this.addressRepository.save(createAddressDto);
  }

  async findAll() {
    return await this.addressRepository.find();
  }

  async findAllWithQuery(query: AddressQueryDto) {
    const filter = {
      ...(query.street && { name: ILike(`%${query.street}%`) }),
      ...(query.neighborhood && {
        neighborhood: ILike(`%${query.neighborhood}%`),
      }),
      ...(query.city && { city: ILike(`%${query.city}%`) }),
      ...(query.state && { state: ILike(`%${query.state}%`) }),
      ...(query.postalCode && { postalCode: ILike(`%${query.postalCode}%`) }),
      ...(query.number && { number: ILike(`%${query.number}%`) }),
      ...(query.amountPeople && { amountPeople: query.amountPeople }),
    };

    // Ordenação
    let sortObject: any;
    try {
      sortObject = JSON.parse(query.sort);
    } catch (error) {
      sortObject = { id: 'ASC' };
    }

    return await this.addressRepository.find({
      where: filter,
      order: sortObject,
      take: query.limit || undefined,
      skip: (query.page - 1) * query.limit || 0,
    });
  }

  async findOne(id: number) {
    try {
      return await this.addressRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Endereço não encontrado.');
    }
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const address = await this.findOne(id);

    // Verifica se o cadUnico já existe
    if (
      updateAddressDto.cadUnico &&
      updateAddressDto.cadUnico !== address.cadUnico
    ) {
      await this.cadUnicoAlreadyExists(updateAddressDto.cadUnico);
    }

    return await this.addressRepository.update(id, updateAddressDto);
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.addressRepository.delete(id);
  }

  async cadUnicoAlreadyExists(cadUnico: string) {
    const address = await this.addressRepository.findOne({
      where: { cadUnico },
    });

    if (address) {
      throw new BadRequestException('O campo cadUnico já está cadastrado.');
    }
  }
}
