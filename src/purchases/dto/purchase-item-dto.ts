import { IsNotEmpty, IsUUID } from 'class-validator';

export class PurchaseItemDto {
  @IsUUID()
  itemId: string;

  @IsNotEmpty()
  qty: number;
}
