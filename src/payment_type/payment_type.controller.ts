import { Controller, Get, Post, Put, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePaymentTypeDto } from './dto/payamentTypeDto';
import { PaymentTypeService } from './payment_type.service';

@Controller('payment-type')
export class PaymentTypeController {

    constructor(private paymetTypeService: PaymentTypeService) { }
    @Post()
    create(@Body() paymentTypeDto: CreatePaymentTypeDto): {} {
        return this.paymetTypeService.create(paymentTypeDto);
    }
    @Get()
    get(): {} {
        return this.paymetTypeService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number): {} {
        return this.paymetTypeService.FindOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() typePaymentDto: CreatePaymentTypeDto): Promise<string> {
        return this.paymetTypeService.updatePaymentType(id, typePaymentDto);
    }

    @Put('delete/:id')
    delete(@Param('id') id: number): Promise<string> {
        return this.paymetTypeService.deletePaymentType(id);
    }
}
