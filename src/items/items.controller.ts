import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private ItemsService: ItemsService) {}

  @Get('add/:id')
  addItem(@Param('id') id: string): string {
    console.log(id);
    return 'Item added';
  }
}
