import { IProductsRepository } from '../../IProductsRepository';
import { IProduct } from '../../../entities/Product';
import { Product } from './schemas/Product';


export class MongoProductsRepository implements IProductsRepository {

  async store(product: IProduct): Promise<IProduct> {
    const newProduct = new Product({
      sku: product.sku,
      name: product.name,
      inventory: product.inventory
    });

    return newProduct.save();
  }

  async find(sku: number): Promise<IProduct | null> {
    const existProduct = await Product.findOne({ sku: sku }).exec();
    return existProduct;
  }

  async update(sku: number, data: IProduct): Promise<IProduct | null> {
    const updatedProduct = await Product.findOneAndUpdate({ sku: sku }, data, { returnDocument: 'after' });
    return updatedProduct;
  }

  async delete(sku: number): Promise<any> {
    return Product.findOneAndDelete({ sku: sku });
  }
}