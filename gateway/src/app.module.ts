import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StoresService } from './stores/stores.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ProductsService } from './products/products.service';
import { StoresController } from './stores/stores.controller';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [HttpModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, StoresController, ProductsController],
  providers: [StoresService, ProductsService],
})
export class AppModule {}
