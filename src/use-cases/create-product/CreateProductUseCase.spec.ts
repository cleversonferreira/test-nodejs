import { expect, it, describe } from 'vitest';
import { CreateProductUseCase } from './CreateProductUseCase';
import { InMemoryProductsRepository } from '../../repositories/implementations/in-memory/InMemoryProductsRepository';
import { IProduct } from '../../entities/Product';

describe('Calculate product inventory', () => {
  it('Should create an product', async () => {
    const inMemoryProductsRepository = new InMemoryProductsRepository();
    const createProductUseCase = new CreateProductUseCase(
      inMemoryProductsRepository,
    );

    const product = await createProductUseCase.execute({
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

    expect(product).toBeInstanceOf(IProduct);
  });

  it('Not should create product with duplicated SKU', async () => {
    const inMemoryProductsRepository = new InMemoryProductsRepository();
    const createProductUseCase = new CreateProductUseCase(
      inMemoryProductsRepository,
    );

    const productExample: IProduct = {
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
    };

    const product = await createProductUseCase.execute(productExample);

    expect(createProductUseCase.execute(productExample)).rejects.toBeInstanceOf(
      Error,
    );
  });
});
