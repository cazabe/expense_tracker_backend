import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';
export class CreateExpenseDto {
    @IsNotEmpty()
    @IsString()
    expense_name: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    created: string;

    @IsDateString()
    deleted: Date;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsNumber()
    expenseTypeId : number

    @IsNotEmpty()
    @IsNumber()
    paymentTypeId:number

    @IsNotEmpty()
    @IsNumber()
    userId:number
}