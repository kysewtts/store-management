import { Body, Controller, Get, Post } from '@nestjs/common';
import { PurchaseItemDto } from './dto/purchase-item-dto';
import { Purchase } from './purchase.entity';
import { PurchasesService } from './purchases.service';

@Controller('purchases')
export class PurchasesController {
  constructor(private purchasesService: PurchasesService) {}

  @Get()
  getPurchases(): Promise<Purchase[]> {
    return this.purchasesService.getPurchases();
  }

  @Post()
  purchaseItem(@Body() purchaseItemDto: PurchaseItemDto): Promise<Purchase> {
    return this.purchasesService.purchaseItem(purchaseItemDto);
  }
}
