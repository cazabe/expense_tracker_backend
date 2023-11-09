import { Module } from '@nestjs/common';
import { PaymentTypeController } from './payment_type.controller';
import { PaymentTypeService } from './payment_type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentType } from './entity/payment_type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PaymentType])],
  controllers: [PaymentTypeController],
  providers: [PaymentTypeService]
})
export class PaymentTypeModule {}
