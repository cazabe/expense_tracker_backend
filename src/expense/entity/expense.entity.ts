import { ExpenseEntitytype } from 'src/expense_type/entity/expense_type.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';

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

  @Column({ default: true })
  status: string;

  @OneToMany(() => ExpenseEntitytype, (expenseType) => expenseType.expense)
    expenseType: ExpenseEntitytype[]
}