import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn('uuid')
  pid: string;

  @Column()
  itemId: string;

  @Column()
  qty: number;

  @Column()
  totalAmount: number;
}
