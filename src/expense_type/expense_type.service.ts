import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ExpenseEntitytype } from './entity/expense_type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseTypeDto } from './dto/expenseTypeDto';

@Injectable()
export class ExpenseTypeService {
    constructor(
        @InjectRepository(ExpenseEntitytype)
        private expenseTypeRepository: Repository<ExpenseEntitytype>,
      ) {}
    async create(expenseType: CreateExpenseTypeDto): Promise<string> {
        try {
            
            this.expenseTypeRepository.save(expenseType);
            return 'Expense Created'
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
         
    }
    async FindOne(id: number): Promise<{}> {        
        try {
            const result = this.expenseTypeRepository.findOneBy({id:id});
            return result;
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
         
    }

    async Update(id: number, expenseType:CreateExpenseTypeDto): Promise<string> {        
        try {
            const expenseTypeRes = await this.expenseTypeRepository.findOneBy({id:id});
            if(!expenseTypeRes){
                throw new HttpException('Bad request', HttpStatus.CONFLICT);
            }
            this.expenseTypeRepository.update(id, expenseType);
            return 'Expense Type updated';
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
         
    }
}
