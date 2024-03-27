import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ConsumptionService } from './consumption.service';
import { CreateConsumptionDto } from './dto/create-consumption.dto';
import { UpdateConsumptionDto } from './dto/update-consumption.dto';
import { ConsumptionQueryDto } from './dto/consumption-query.dto';

@Controller('api')
export class ConsumptionController {
  constructor(private readonly consumptionService: ConsumptionService) {}

  @Post('consumption')
  async create(@Body() createConsumptionDto: CreateConsumptionDto) {
    return await this.consumptionService.create(createConsumptionDto);
  }

  @Get('consumptions')
  async findAll(@Query() query: ConsumptionQueryDto) {
    if (Object.keys(query).length) {
      return await this.consumptionService.findAllWithQuery(query);
    }
    return await this.consumptionService.findAll();
  }

  @Get('consumption/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.consumptionService.findOne(+id);
  }

  @Patch('consumption/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConsumptionDto: UpdateConsumptionDto,
  ) {
    return await this.consumptionService.update(+id, updateConsumptionDto);
  }

  @Delete('consumption/:id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.consumptionService.remove(+id);
  }
}
