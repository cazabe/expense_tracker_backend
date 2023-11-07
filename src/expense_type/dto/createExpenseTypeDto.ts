import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExpenseTypeDto{
 @IsString()
 @IsNotEmpty()
  expense_type: string;    
}