import { Module } from '@nestjs/common';
import { PaymentTypeController } from './payment_type.controller';
import { PaymentTypeService } from './payment_type.service';

@Module({
  controllers: [PaymentTypeController],
  providers: [PaymentTypeService]
})
export class PaymentTypeModule {}
