import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProductsService } from '../products/products.service';

@Injectable()
export class StoresService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly productsService: ProductsService,
  ) {}

  async getStores() {
    const URL = this.configService.get('API_STORES');
    const { data } = await this.httpService.axiosRef.get(`${URL}/stores`);
    return data;
  }

  async getStore(id) {
    const URL = this.configService.get('API_STORES');
    const { data } = await this.httpService.axiosRef.get(`${URL}/stores/${id}`);
    const products = await this.productsService.getProducts();
    return { company: data, products };
  }
}
