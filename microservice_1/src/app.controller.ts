import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('stores')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStores() {
    return this.appService.getStores();
  }

  @Get(':id')
  getStore(@Param('id') id) {
    return this.appService.getStore(id);
  }
}
