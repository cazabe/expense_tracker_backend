import { ExpenseEntitytype } from 'src/expense_type/entity/expense_type.entity';
import { PaymentType } from 'src/payment_type/entity/payment_type.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expense_name: string;

  @Column('decimal', { precision: 6, scale: 2 })
  amount: number;

  @Column()
  created: Date;

  @Column({nullable: true})
  deleted: Date;

  @Column({ default: 'A' })
  status: string;

  @Column({nullable: true})
  expenseTypeId:number 

  @Column({nullable: true})
  paymentTypeId:number 

  @ManyToOne(() => ExpenseEntitytype, (expenseType) => expenseType.expense)
  expenseType: ExpenseEntitytype[]

  @ManyToOne(() => PaymentType, (paymentType) => paymentType.expense)
  paymentType: PaymentType[]
}