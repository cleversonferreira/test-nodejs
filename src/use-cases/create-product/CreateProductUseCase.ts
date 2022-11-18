import { IProduct } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { ICreateProductRequestDTO } from "./CreateProductDTO";

export class CreateProductUseCase {
  constructor(private productsRepository: IProductsRepository) { }

  async execute(data: ICreateProductRequestDTO) {
    const productAlreadyExists = await this.productsRepository.find(data.sku);

    if (productAlreadyExists) {
      throw new Error("SKU already exists");
    }

    const product = new IProduct(data);

    return this.productsRepository.store(product);
  }
}
