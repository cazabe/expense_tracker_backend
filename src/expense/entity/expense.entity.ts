import { ExpenseEntitytype } from 'src/expense_type/entity/expense_type.entity';
import { PaymentType } from 'src/payment_type/entity/payment_type.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expense_name: string;

  @Column()
  amount: Number;

  @Column()
  created: Date;

  @Column()
  deleted: Date;

  @Column({ default: 'A' })
  status: string;

  @OneToOne(() => ExpenseEntitytype)
  @JoinColumn()
  expenseType: Number

  @OneToOne(() => PaymentType)
  @JoinColumn()
  paymentType: Number

}