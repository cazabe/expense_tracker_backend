import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreateExpenseTypeDto } from './dto/expenseTypeDto';
import { ExpenseTypeService } from './expense_type.service';


@Controller('expense-type')
export class ExpenseTypeController {
    constructor(private expenseTypeService:ExpenseTypeService){}
    @Post()
    create(@Body() expenseTypeDto: CreateExpenseTypeDto) {
            return this.expenseTypeService.create(expenseTypeDto);
    }

    @Get()
    findAll():Promise<{}> {
            return this.expenseTypeService.FindAll();   
    }

    @Get(':id')
    findOne(@Param('id') id: number):Promise<{}> {
            return this.expenseTypeService.FindOne(id);
    }

    @Put(':id')
     update(@Param('id') id: number, @Body() expenseTypeDto:CreateExpenseTypeDto): Promise<string> {
        return this.expenseTypeService.Update(id, expenseTypeDto);
    }

    @Put('delete/:id')
     delete(@Param('id') id: number): Promise<string> {
        return this.expenseTypeService.Delete(id);
    }
}
