import { test, expect } from 'vitest';
import { IProduct } from './Product';

test('create an product', () => {
  const product = new IProduct({
    name: 'Sabonete',
    sku: 12345,
    inventory: {
      quantity: 1,
      warehouses: [
        {
          locality: 'PR',
          quantity: 10,
          type: 'ECOMMERCE',
        },
      ],
    },
    isMarketable: true,
  });

  expect(product).toBeInstanceOf(IProduct);
  expect(product.name).toEqual('Sabonete');

});
