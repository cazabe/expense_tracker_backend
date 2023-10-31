import { Module } from '@nestjs/common';
import { ExpenseTypeController } from './expense_type.controller';
import { ExpenseTypeService } from './expense_type.service';

@Module({
  controllers: [ExpenseTypeController],
  providers: [ExpenseTypeService]
})
export class ExpenseTypeModule {}
