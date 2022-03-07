import { IsNumber, IsUUID } from 'class-validator';

export class UpdateItemDto {
  @IsUUID()
  itemId: string;

  @IsNumber()
  qty: number;
}
