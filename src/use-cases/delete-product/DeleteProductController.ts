import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
    constructor(private deleteProductUseCase: DeleteProductUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { sku } = request.params;

        try {
            const deletedProduct = await this.deleteProductUseCase.execute(parseInt(sku));

            return response.status(200).send(deletedProduct);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Error on delete product SKU'
            });
        }
    }
}