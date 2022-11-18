import { Request, Response } from 'express';
import { UpdateProductUseCase } from './UpdateProductUseCase';

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { sku } = request.params;
    const data = request.body;

    try {
      const updatedProduct = await this.updateProductUseCase.execute(parseInt(sku), data);

      return response.status(200).json(updatedProduct);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error on update product',
      });
    }
  }
}
