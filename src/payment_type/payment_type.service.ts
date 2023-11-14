import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentType } from './entity/payment_type.entity';
import { Repository } from 'typeorm';
import { CreatePaymentTypeDto } from './dto/payamentTypeDto';

@Injectable()
export class PaymentTypeService {
    constructor(
        @InjectRepository(PaymentType)
        private paymentTypeRepository : Repository<PaymentType>
    ){}

    async create(paymentType:CreatePaymentTypeDto):Promise<{}>{
        
        try {
            this.paymentTypeRepository.save(paymentType);
            return({"message" : "created"});
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }

    async FindOne(id: number): Promise<{}> {        
        try {
            const result = this.paymentTypeRepository.findOneBy({id:id});
            return result;
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
         
    }
}
