import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePaymentTypeDto } from './dto/payamentTypeDto';
import { PaymentTypeService } from './payment_type.service';

@Controller('payment-type')
export class PaymentTypeController {

    constructor(private paymetTypeService:PaymentTypeService){}
    @Post()
    create(@Body() paymentTypeDto: CreatePaymentTypeDto):{} {
        try {
            return this.paymetTypeService.create(paymentTypeDto);
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }
}
