import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AddItemDto } from './dto/add-Item.dto';
import { UpdateItemDto } from './dto/update-item-dto';
import { Item } from './item.entity';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  getItems(): Promise<Item[]> {
    return this.itemsService.getItems();
  }

  @Get('/:id')
  getItemById(@Param('id') id: string): Promise<Item> {
    return this.itemsService.getItemById(id);
  }

  @Post()
  addItem(@Body() addItemDto: AddItemDto): Promise<Item> {
    return this.itemsService.addItem(addItemDto);
  }

  @Patch()
  updateInventory(@Body() updateItemDto: UpdateItemDto): Promise<Item> {
    return this.itemsService.updateInventory(updateItemDto);
  }
}
