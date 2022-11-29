import { expect, it, describe } from 'vitest';
import { IProduct } from '../../entities/Product';
import { ProductInventoryService } from './ProductInventoryService';

describe('Calculate product inventory', () => {

  it('Should return a product inventory', async () => {
    const product = new IProduct({
      name: 'Sabonete',
      sku: 12345,
      inventory: {
        warehouses: [
          {
            locality: 'PR',
            quantity: 10,
            type: 'ECOMMERCE',
          },
          {
            locality: 'SC',
            quantity: 30,
            type: 'ECOMMERCE',
          },
          {
            locality: 'SP',
            quantity: 10,
            type: 'ECOMMERCE',
          },
        ],
      },
    });

    const productInventoryService = new ProductInventoryService();
    const productInventoryResult = await productInventoryService.execute(
      product,
    );

    expect(productInventoryResult.inventory.quantity).toEqual(50);
    expect(productInventoryResult.isMarketable).toEqual(true);
  });
  
});
