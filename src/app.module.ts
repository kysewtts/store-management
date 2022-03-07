import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { PurchaseModule } from './purchases/purchases.module';
@Module({
  imports: [
    ItemsModule,
    PurchaseModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ujjwalprakash',
      password: '',
      database: 'store_management',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
