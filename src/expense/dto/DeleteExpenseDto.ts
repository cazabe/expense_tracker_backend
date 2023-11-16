import { IsNotEmpty, IsString } from 'class-validator';
export class DeleteExpenseDto {
    @IsNotEmpty()
    @IsString()
    status: string;
}