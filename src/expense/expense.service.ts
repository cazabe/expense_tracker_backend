import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entity/expense.entity';
import { CreateExpenseDto } from './dto/CreateExpenseDto';
import { ExpenseTypeService } from 'src/expense_type/expense_type.service';
import { PaymentTypeService } from 'src/payment_type/payment_type.service';
import { getTodayDate } from 'src/common/utils/util';
import { UserService } from 'src/user/user.service';

interface querySearchExpense {
    "fecha-init": string;
    "fecha-fin": string;
  }
@Injectable()
export class ExpenseService {
    
    constructor(
        @InjectRepository(Expense)
        private expenseRepository: Repository<Expense>,
        private expesnseTypeService:ExpenseTypeService,
        private paymentTypeService:PaymentTypeService,
        private userService:UserService,
      ) {}
    async create(expense: CreateExpenseDto): Promise<string> {
        try {
            const type = await this.expesnseTypeService.FindOne(expense.expenseTypeId);
            const payment = await this.paymentTypeService.FindOne(expense.paymentTypeId);
            const user = await this.userService.findOneById(expense.userId);
            
            if(!type || !payment || !user){
                throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
            }
            expense.created = getTodayDate();
            const newExpense = this.expenseRepository.create(expense);
            await this.expenseRepository.save(newExpense);
            return 'Expense created'
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
         
    }

    async getExpenses():Promise<{}>{
        try {
            return await this.expenseRepository.find(
                {
                    relations:['expenseType', 'paymentType', 'user'],
                    where:{status:'A'}
                },
            )
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.NOT_FOUND);
        }
       
    }

    async getTotalAmount(query:querySearchExpense):Promise<{amount:number}>{
        console.log(query['fecha-init']);
        console.log(query['fecha-fin']);
        
        console.log(new Date(query['fecha-init']));
        console.log(new Date(query['fecha-fin']));
        


        let totalExpense:number = 0;
        
        try {
            const expenses = await this.expenseRepository.find(
                {
                    where:{status:'A', created:new Date(query['fecha-init'])}
                },
            )
                
        expenses.forEach((expense) => {
            if (!expense.amount) {
                totalExpense = 0;
                return;
            }
            totalExpense += Number(expense.amount);
        });
        
        totalExpense = Number(totalExpense.toFixed(2));

            return {amount: totalExpense};
        } catch (error) {            
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
       
    }

    async updateExpense(id:number, updateExpense: CreateExpenseDto):Promise<string>{
        try{
        const expense = await this.expenseRepository.findOneBy({id:id});
        if(!expense){
            throw new HttpException('Bad request', HttpStatus.CONFLICT);
        }
        this.expenseRepository.update(id, updateExpense);
        return 'Expense updated'
        }catch(error){
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
        
    }

    async deleteExpense(id:number):Promise<string>{
        
        try{
            const expense = await this.expenseRepository.findOneBy({id:id});
            if(!expense){
                throw new HttpException('Bad request', HttpStatus.CONFLICT);
            }
            expense.status = 'I';
            this.expenseRepository.update(id, expense);
            return 'Expense deleted'
            }catch(error){
                throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
            }
    }

    
}
