import { Expense } from 'src/expense/entity/expense.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ExpenseEntitytype {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expense_type: string;

  @Column({ default: true })
  status: string;

  @ManyToOne(() => Expense, (expense) => expense.expenseType)
    expense: Expense
}