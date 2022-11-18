import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { sku, name, inventory } = request.body;

    try {
      const product = await this.createProductUseCase.execute({
        sku,
        name,
        inventory,
      });

      return response.status(201).json(product);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error on create product'
      });
    }
  }
}
