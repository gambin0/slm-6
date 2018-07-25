import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { category: { name: 'produce' , custom: false }, custom: false, name: 'apple' },
      { category: { name: 'dairy' , custom: false }, custom: false, name: 'milk' },
      { category: { name: 'produce' , custom: false }, custom: false, name: 'potatoe' },
      { category: { name: 'condiments' , custom: false }, custom: false, name: 'mayonnaise' },
      { category: { name: 'condiments' , custom: false }, custom: false, name: 'cider vinegar' },
      { category: { name: 'dry/baking goods' , custom: false }, custom: false, name: 'sugar' },
      { category: { name: 'condiments' , custom: false }, custom: false, name: 'yellow mustard' },
      { category: { name: 'dry/baking goods' , custom: false }, custom: false, name: 'salt' },
      { category: { name: 'spices' , custom: false }, custom: false, name: 'garlic powder' },
      { category: { name: 'spices' , custom: false }, custom: false, name: 'pepper' },
      { category: { name: 'produce' , custom: false }, custom: false, name: 'celery' },
      { category: { name: 'produce' , custom: false }, custom: false, name: 'onion' },
      { category: { name: 'dairy' , custom: false }, custom: false, name: 'eggs' },
      { category: { name: 'spices' , custom: false }, custom: false, name: 'paprika' }
    ];

    const categories = [
      { name: 'bakery' , custom: false },
      { name: 'produce' , custom: false },
      { name: 'meat' , custom: false },
      { name: 'frozen food' , custom: false },
      { name: 'dairy' , custom: false },
      { name: 'canned/jarred goods' , custom: false },
      { name: 'dry/baking goods' , custom: false },
      { name: 'cleaners' , custom: false },
      { name: 'paper goods' , custom: false },
      { name: 'personal care' , custom: false },
      { name: 'spices' , custom: false },
      { name: 'condiments' , custom: false }

    ];
    return {items, categories};
  }
}
