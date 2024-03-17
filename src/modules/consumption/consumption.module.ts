import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from '../address/address.module';
import { ConsumptionController } from './consumption.controller';
import { ConsumptionService } from './consumption.service';
import { Consumption } from './entities/consumption.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consumption]), AddressModule],
  controllers: [ConsumptionController],
  providers: [ConsumptionService],
  exports: [ConsumptionService],
})
export class ConsumptionModule {}
