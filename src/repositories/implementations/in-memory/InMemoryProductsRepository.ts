import { IProduct } from '../../../entities/Product';
import { IProductsRepository } from '../../IProductsRepository';

export class InMemoryProductsRepository implements IProductsRepository {
  public items: IProduct[] = [];

  async store(product: IProduct): Promise<IProduct> {
    this.items.push(product);
    return product;
  }

  async find(sku: number): Promise<IProduct | null> {
    const found = this.items.find(element => element.sku === sku);
    if (found) {
      return found;
    }

    return null;
  }

  async update(sku: number, data: IProduct): Promise<IProduct | null> {
    return null;
  }

  async delete(sku: number): Promise<null> {
    return null;
  }
}
