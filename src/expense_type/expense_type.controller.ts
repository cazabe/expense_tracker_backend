import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreateExpenseTypeDto } from './dto/createExpenseTypeDto';
import { ExpenseTypeService } from './expense_type.service';


@Controller('expense-type')
export class ExpenseTypeController {
    constructor(private expenseTypeService:ExpenseTypeService){}
    @Post()
    create(@Body() expenseTypeDto: CreateExpenseTypeDto) {
        try {
            return this.expenseTypeService.create(expenseTypeDto);
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }
}
