import { MongoProductsRepository } from '../../repositories/implementations/mongoDB/MongoProductsRepository';
import { ProductInventoryService } from '../../services/products/ProductInventoryService';
import { FindProductController } from './FindProductController';
import { FindProductUseCase } from './FindProductUseCase';

const productInventoryService = new ProductInventoryService();

const mongoProductsRepository = new MongoProductsRepository();

const findProductUseCase = new FindProductUseCase(mongoProductsRepository, productInventoryService);

const findProductController = new FindProductController(findProductUseCase);

export { findProductUseCase, findProductController };
