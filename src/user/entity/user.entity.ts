import { Expense } from 'src/expense/entity/expense.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  userName: string;

  @Column()
  password: string;

  @Column({ default: 'A' })
  status: string;

  @OneToMany(() => Expense, (expense) => expense.user)
    expense: Expense
}