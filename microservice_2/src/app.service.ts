import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProducts() {
    return [
      {
        id: 1,
        name: 'salchipapa',
      },
      {
        id: 2,
        name: 'papas',
      },
    ];
  }
}
