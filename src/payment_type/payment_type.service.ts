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
            await this.paymentTypeRepository.save(paymentType);
            return({"message" : "created"});
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }

    async getAll():Promise<{}>{  
        try {
            return await this.paymentTypeRepository.findBy({status:'A'});
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }

    async FindOne(id: number): Promise<{}> {        
        try {
            const result = await this.paymentTypeRepository.findOneBy({id:id});
            return result;
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
         
    }
    async updatePaymentType(id:number, updatePaymentType: CreatePaymentTypeDto):Promise<string>{
        try{
        const paymentType = await this.paymentTypeRepository.findOneBy({id:id});
        if(!paymentType){
            throw new HttpException('Bad request', HttpStatus.CONFLICT);
        }
        await this.paymentTypeRepository.update(id, updatePaymentType);
        return 'Expense updated'
        }catch(error){
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }   
    }

    async deletePaymentType(id:number):Promise<string>{
        
        try{
            const paymentType = await this.paymentTypeRepository.findOneBy({id:id});
            if(!paymentType){
                throw new HttpException('Bad request', HttpStatus.CONFLICT);
            }
            paymentType.status = 'I';
            this.paymentTypeRepository.update(id, paymentType);
            return 'Expense deleted'
            }catch(error){
                throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
            }
    }
}
