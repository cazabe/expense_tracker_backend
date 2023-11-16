import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreateExpenseTypeDto } from './dto/expenseTypeDto';
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

    @Get(':id')
    findOne(@Param('id') id: number) {
        try {
            return this.expenseTypeService.FindOne(id);
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
     update(@Param('id') id: number, @Body() expenseTypeDto:CreateExpenseTypeDto): Promise<{}> {
        return this.expenseTypeService.Update(id, expenseTypeDto);
    }
}
