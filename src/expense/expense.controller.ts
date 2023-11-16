import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreateExpenseDto } from './dto/CreateExpenseDto';
import { ExpenseService } from './expense.service';


@Controller('expense')
export class ExpenseController {
    constructor(private expenseService: ExpenseService) { }

    @Post()
    create(@Body() expenseDto: CreateExpenseDto) {
        try {
            return this.expenseService.create(expenseDto);
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }
    @Get()
     findAll(): Promise<{}> {
        return this.expenseService.getExpenses();
    }

    @Put(':id')
     update(@Param('id') id: number, @Body() expenseDto:CreateExpenseDto): Promise<{}> {
        return this.expenseService.updateExpense(id, expenseDto);
    }

    @Put('delete/:id')
    remove(@Param('id') id: number) {
        return this.expenseService.deleteExpense(id);
    }

    
}
