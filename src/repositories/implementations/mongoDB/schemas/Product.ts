import { Schema, model } from 'mongoose';
import { IProduct } from '../../../../entities/Product';

const productSchema = new Schema<IProduct>({
    sku: { type: Number, required: true },
    name: { type: String, required: true },
    inventory: {
        warehouses: [{
            locality: { type: String, required: true },
            quantity: { type: Number, required: true },
            type: { type: String, required: true },
        }]
    },
}, { versionKey: false });

const Product = model<IProduct>('Product', productSchema);

export { Product }