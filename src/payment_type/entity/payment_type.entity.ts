import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  payment_name: string;

  @Column({ default: true })
  status: string;
}