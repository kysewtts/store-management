import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsRepository } from './items.repository';
import { ItemsService } from './items.service';

@Module({
  imports: [TypeOrmModule.forFeature([ItemsRepository])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
