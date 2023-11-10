import { Module } from '@nestjs/common';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './entity/expense.entity';
import { ExpenseTypeModule } from 'src/expense_type/expense_type.module';


@Module({
  imports:[TypeOrmModule.forFeature([Expense]), ExpenseTypeModule],
  controllers: [ExpenseController],
  providers: [ExpenseService]
})
export class ExpenseModule {}
