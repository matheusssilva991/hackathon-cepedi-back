import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

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
