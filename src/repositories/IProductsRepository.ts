import { IProduct } from "../entities/Product";

export interface IProductsRepository {
  store(product: IProduct): Promise<IProduct>;
  find(sku: number): Promise<IProduct | null>;
  update(sku: number, data: IProduct): Promise<IProduct | null>;
  delete(sku: number): Promise<IProduct>;
}