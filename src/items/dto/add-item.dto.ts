import { IsNotEmpty } from 'class-validator';

export class AddItemDto {
  @IsNotEmpty()
  itemName: string;

  @IsNotEmpty()
  inventory: number;

  @IsNotEmpty()
  itemPrice: number;
}
