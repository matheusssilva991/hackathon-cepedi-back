import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('api')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('address')
  async create(@Body() createAddressDto: CreateAddressDto) {
    return await this.addressService.create(createAddressDto);
  }

  @Get('addresses')
  async findAll() {
    return await this.addressService.findAll();
  }

  @Get('address/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.addressService.findOne(+id);
  }

  @Patch('address/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return await this.addressService.update(+id, updateAddressDto);
  }

  @Delete('address/:id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.addressService.remove(+id);
  }
}
