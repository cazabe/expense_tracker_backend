import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePaymentTypeDto{
    @IsNotEmpty()
    @IsString()
    payment_name:string
}