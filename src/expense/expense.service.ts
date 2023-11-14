import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entity/expense.entity';
import { CreateExpenseDto } from './dto/CreateExpenseDto';
import { ExpenseTypeService } from 'src/expense_type/expense_type.service';
import { PaymentTypeService } from 'src/payment_type/payment_type.service';
import { getTodayDate } from 'src/common/utils/util';

@Injectable()
export class ExpenseService {
    constructor(
        @InjectRepository(Expense)
        private expenseRepository: Repository<Expense>,
        private expesnseTypeService:ExpenseTypeService,
        private paymentTypeService:PaymentTypeService
      ) {}
    async create(expense: CreateExpenseDto): Promise<string> {
        try {
            const type = await this.expesnseTypeService.FindOne(expense.expenseTypeId);
            const payment = await this.paymentTypeService.FindOne(expense.paymentTypeId);
            
            if(!type || !payment){
                throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
            }
            expense.created = getTodayDate();
            const newExpense = this.expenseRepository.create(expense);
            this.expenseRepository.save(newExpense);
            return 'Expense created'
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
         
    }

    async getExpenses():Promise<{}>{
        return this.expenseRepository.find(
            {
                relations:['expenseType', 'paymentType']
            },
        )
    }

    async updateExpense(id:number, updateExpense: CreateExpenseDto):Promise<string>{
        try{
        const expense = await this.expenseRepository.findOneBy({id:id});
        expense.expense_name = updateExpense.expense_name
        expense.amount = updateExpense.amount
        expense.expenseTypeId = updateExpense.expenseTypeId
        expense.paymentTypeId = updateExpense.paymentTypeId
        this.expenseRepository.save(expense);
        return 'Expense updated'
        }catch(error){
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
        
    }

    
}
