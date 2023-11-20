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
    @Get()
    get():Promise<{}> {
        try {
            return this.paymetTypeService.getAll();
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':id')
    getOne(@Param('id') id: number):Promise<{}> {
        try {
            return this.paymetTypeService.FindOne(id);
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
     update(@Param('id') id: number, @Body() typePaymentDto:CreatePaymentTypeDto): Promise<string> {
        return this.paymetTypeService.updatePaymentType(id, typePaymentDto);
    }

    @Put('delete/:id')
     delete(@Param('id') id: number): Promise<string> {
        return this.paymetTypeService.deletePaymentType(id);
    }
}
