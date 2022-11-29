import { MongoProductsRepository } from '../../repositories/implementations/mongoDB/MongoProductsRepository';

import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const mongoProductsRepository = new MongoProductsRepository();

const createProductUseCase = new CreateProductUseCase(mongoProductsRepository);

const createProductController = new CreateProductController(createProductUseCase);

export {CreateProductUseCase, createProductController}