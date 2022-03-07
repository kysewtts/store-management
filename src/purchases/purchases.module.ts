import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsRepository } from 'src/items/items.repository';
import { PurchasesController } from './purchases.controller';
import { PurchasesRepository } from './purchases.repository';
import { PurchasesService } from './purchases.service';

@Module({
  imports: [TypeOrmModule.forFeature([PurchasesRepository, ItemsRepository])],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchaseModule {}
