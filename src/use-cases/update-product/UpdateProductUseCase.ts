import { IProduct } from '../../entities/Product';
import { IProductsRepository } from '../../repositories/IProductsRepository';
import { IUpdateProductRequestDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase {
  constructor(private productsRepository: IProductsRepository) { }

  async execute(sku: number, data: IUpdateProductRequestDTO) {
    const productExists = await this.productsRepository.find(sku);

    if (!productExists) {
      throw new Error("This product does`t exists");
    }

    const product = new IProduct(data);
    return this.productsRepository.update(sku, product);
  }
}