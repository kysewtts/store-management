import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddItemDto } from './dto/add-Item.dto';
import { UpdateItemDto } from './dto/update-item-dto';
import { Item } from './item.entity';
import { ItemsRepository } from './items.repository';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemsRepository)
    private itemsRepository: ItemsRepository,
  ) {}

  async getItems(): Promise<Item[]> {
    const items = await this.itemsRepository.find();
    return items;
  }

  async getItemById(id: string): Promise<Item> {
    const foundItem = await this.itemsRepository.findOne(id);

    if (!foundItem) {
      throw new NotFoundException(`No item exists in the store with id: ${id}`);
    }
    return foundItem;
  }

  async addItem(addItemDto: AddItemDto): Promise<Item> {
    const { itemName, inventory, itemPrice } = addItemDto;
    const task = this.itemsRepository.create({
      itemName,
      inventory,
      itemPrice,
    });
    await this.itemsRepository.save(task);
    return task;
  }

  async updateInventory(updateItemDto: UpdateItemDto): Promise<Item> {
    const { itemId, qty } = updateItemDto;
    const foundItem = await this.getItemById(itemId);
    const updatedItem: Item = { ...foundItem };
    updatedItem.inventory += qty;
    await this.itemsRepository.save(updatedItem);
    return updatedItem;
  }
}
