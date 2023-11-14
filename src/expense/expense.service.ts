import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entity/expense.entity';
import { CreateExpenseDto } from './dto/CreateExpenseDto';
import { ExpenseTypeService } from 'src/expense_type/expense_type.service';
import { PaymentTypeService } from 'src/payment_type/payment_type.service';

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
            const newExpense = this.expenseRepository.create(expense);
            this.expenseRepository.save(newExpense);
            return 'Expense created'
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
         
    }

    async getExpense():Promise<{}>{
        return this.expenseRepository.find(
            {
                relations:['expenseType', 'paymentType']
            }
        )
    }

    // async findAll(): Promise<GetUserDto[]> {
    //     try {
    //     const users = await this.usersRepository.find();
    //     return users;
    //     } catch (error) {
    //         throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
    //     }
    // }

    // async findOne(userName: string): Promise<GetUserDto> {
    //     try {
    //         const user = await this.usersRepository.findOne({where:{
    //             userName:userName
    //         }});
    //         return user;
    //     } catch (error) {
    //         throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
    //     }
        
    //   }
}
