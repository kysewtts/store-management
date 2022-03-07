import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseItemDto } from './dto/purchase-item-dto';
import { ItemsRepository } from 'src/items/items.repository';
import { Purchase } from './purchase.entity';
import { PurchasesRepository } from './purchases.repository';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(PurchasesRepository)
    private purchasesRepository: PurchasesRepository,
    @InjectRepository(ItemsRepository)
    private itemsRepository: ItemsRepository,
  ) {}

  async getPurchases(): Promise<Purchase[]> {
    const purchases = this.purchasesRepository.find();
    return purchases;
  }

  async purchaseItem(purchaseItemDto: PurchaseItemDto): Promise<Purchase> {
    const { itemId, qty } = purchaseItemDto;
    const item = await this.itemsRepository.findOne(itemId);
    if (!item) {
      throw new NotFoundException(`No item exists with itemId: ${itemId}!!`);
    }
    if (item.inventory >= qty) {
      const price = qty * item.itemPrice;
      const updatedItem = { ...item };
      updatedItem.inventory -= qty;
      const purchase = this.purchasesRepository.create({
        itemId,
        qty,
        totalAmount: price,
      });
      await this.itemsRepository.save(updatedItem);
      await this.purchasesRepository.save(purchase);
      return purchase;
    } else {
      throw new NotFoundException('Not enough quantity left in the store');
    }
  }
}
