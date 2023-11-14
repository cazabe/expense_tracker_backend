import { Expense } from 'src/expense/entity/expense.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class PaymentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  payment_name: string;

  @Column({ default: 'A' })
  status: string;

  @OneToMany(() => Expense, (expense) => expense.paymentType)
    expense: Expense
}