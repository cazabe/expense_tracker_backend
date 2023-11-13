import { Expense } from 'src/expense/entity/expense.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class ExpenseEntitytype {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expense_type: string;

  @Column({ default: 'A' })
  status: string;

  @OneToMany(() => Expense, (expense) => expense.expenseType)
    expense: Expense
}