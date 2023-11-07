import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';
export class CreateExpenseDto {
    @IsNotEmpty()
    @IsString()
    expense_name: string;

    @IsNotEmpty()
    @IsNumber()
    amount: Number;

    @IsNotEmpty()
    @IsNumber()
    created: Date;

    @IsDateString()
    @IsNotEmpty()
    deleted: Date;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsNumber()
    expenseTypeId : Number

    @IsNotEmpty()
    @IsNumber()
    paymentTypeId:Number
}