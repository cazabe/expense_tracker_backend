import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExpenseEntitytype {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expense_type: string;

  @Column({ default: 'A' })
  status: string;
}