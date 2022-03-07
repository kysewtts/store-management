import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  itemName: string;

  @Column()
  inventory: number;

  @Column()
  itemPrice: number;
}
