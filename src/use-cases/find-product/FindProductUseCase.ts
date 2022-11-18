import { IProductsRepository } from '../../repositories/IProductsRepository';
import { ProductInventoryService } from '../../services/products/ProductInventoryService';

export class FindProductUseCase {
  constructor(
    private productsRepository: IProductsRepository,
    private productInventoryService: ProductInventoryService,
  ) { }

  async execute(sku: number) {
    const product = await this.productsRepository.find(sku);

    if (!product) {
      throw new Error('Error on search product')
    }

    // service to populate isMarketable and quantity fields
    return this.productInventoryService.execute(product);

  }
}
