import { Controller, Get, Post, Put, Body, Param, HttpException, HttpStatus, Query } from '@nestjs/common';
import { CreateExpenseDto } from './dto/CreateExpenseDto';
import { ExpenseService } from './expense.service';


@Controller('expense')
export class ExpenseController {
    constructor(private expenseService: ExpenseService) { }

    @Post()
    create(@Body() expenseDto: CreateExpenseDto): Promise<String> {
        return this.expenseService.create(expenseDto);
    }
    @Get()
    findAll(): Promise<{}> {
        return this.expenseService.getExpenses();
    }

    @Get('total-expense')
    getTotalExpense(@Query() query: { "fecha-filter": string }): Promise<{ amount: number }> {
        return this.expenseService.getTotalAmount(query);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() expenseDto: CreateExpenseDto): Promise<{}> {
        return this.expenseService.updateExpense(id, expenseDto);
    }

    @Put('delete/:id')
    remove(@Param('id') id: number) {
        return this.expenseService.deleteExpense(id);
    }


}
