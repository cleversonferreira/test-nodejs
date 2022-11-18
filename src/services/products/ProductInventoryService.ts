import { IProduct } from "../../entities/Product";

export class ProductInventoryService {
    async execute(product: IProduct): Promise<IProduct> {

        let quantity = 0
        let isMarketable = false;

        const inventory = product.inventory.warehouses;

        inventory.forEach((item) => {
            if (item.quantity) {
                quantity = quantity + item.quantity
            }
        })

        isMarketable = (quantity > 0) ? true : false;

        if (product.inventory) {
            product.inventory.quantity = quantity;
            product.isMarketable = isMarketable;
        }

        return product;
    }
}