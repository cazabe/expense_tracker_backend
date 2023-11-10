import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entity/expense.entity';
import { CreateExpenseDto } from './dto/CreateExpenseDto';
import { ExpenseTypeService } from 'src/expense_type/expense_type.service';

@Injectable()
export class ExpenseService {
    constructor(
        @InjectRepository(Expense)
        private expenseRepository: Repository<Expense>,
        private expesnseTypeService:ExpenseTypeService
      ) {}
    async create(expense: CreateExpenseDto): Promise<string> {
        try {
            const type = this.expesnseTypeService.FindOne(expense.expenseTypeId);
            this.expenseRepository.save(expense);
            return 'Expense created'
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
         
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
