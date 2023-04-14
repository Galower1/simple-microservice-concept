import { Injectable } from '@nestjs/common';

const stores = [
  {
    id: 1,
    name: 'Sofia',
  },
  {
    id: 2,
    name: 'Fridosa',
  },
];

@Injectable()
export class AppService {
  getStores() {
    return stores;
  }

  getStore(id) {
    return stores.find((store) => store.id === parseInt(id));
  }
}
