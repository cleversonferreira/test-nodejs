import { Request, Response } from 'express';
import { FindProductUseCase } from './FindProductUseCase';

export class FindProductController {
  constructor(private findProductUseCase: FindProductUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { sku } = request.params;

    try {
      const product = await this.findProductUseCase.execute(parseInt(sku));

      return response.status(200).send(product);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Error on search product SKU',
      });
    }
  }
}
