import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getProducts() {
    const URL = this.configService.get('API_PRODUCTS');
    const { data } = await this.httpService.axiosRef.get(`${URL}/products`);
    return data;
  }
}
