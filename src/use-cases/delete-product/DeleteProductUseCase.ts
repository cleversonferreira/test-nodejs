import { IProductsRepository } from '../../repositories/IProductsRepository';

export class DeleteProductUseCase {
  constructor(private productsRepository: IProductsRepository) { }

  async execute(sku: number) {
    return this.productsRepository.delete(sku);
  }
}
