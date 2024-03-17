import { AddressService } from './../address/address.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConsumptionDto } from './dto/create-consumption.dto';
import { UpdateConsumptionDto } from './dto/update-consumption.dto';
import { Consumption } from './entities/consumption.entity';

@Injectable()
export class ConsumptionService {
  constructor(
    @InjectRepository(Consumption)
    private consumptionRepository: Repository<Consumption>,
    private readonly addressService: AddressService,
  ) {}

  async create(createConsumptionDto: CreateConsumptionDto) {
    // Verifica se o endereço existe
    await this.addressService.findOne(createConsumptionDto.addressId);

    return await this.consumptionRepository.save(createConsumptionDto);
  }

  async findAll() {
    return await this.consumptionRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.consumptionRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Consumo não encontrado.');
    }
  }

  async update(id: number, updateConsumptionDto: UpdateConsumptionDto) {
    await this.findOne(id);

    // Verifica se o endereço existe
    if (updateConsumptionDto.addressId) {
      await this.addressService.findOne(updateConsumptionDto.addressId);
    }

    return await this.consumptionRepository.update(id, updateConsumptionDto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.consumptionRepository.delete(id);
  }
}
