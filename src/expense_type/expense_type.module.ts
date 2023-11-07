import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseTypeController } from './expense_type.controller';
import { ExpenseTypeService } from './expense_type.service';
import { ExpenseEntitytype } from './entity/expense_type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ExpenseEntitytype])],
  controllers: [ExpenseTypeController],
  providers: [ExpenseTypeService]
})
export class ExpenseTypeModule {}
