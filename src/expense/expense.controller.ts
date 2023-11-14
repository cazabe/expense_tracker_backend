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
     update(@Body() expenseDto:CreateExpenseDto, @Param('id') id: number): Promise<{}> {
        return this.expenseService.updateExpense(id, expenseDto);
    }

    // @Get(':username')
    // findOne(@Param('username') userName: string) {
    //     return this.userService.findOne(userName);
    // }
    

    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateCatDto: UpdateUserDto) {
    //     return `This action updates a #${id} user`;
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return `This action removes a #${id} user`;
    // }
}
