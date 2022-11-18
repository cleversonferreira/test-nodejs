import { Router } from "express";

import { createProductController } from "./use-cases/create-product";
import { findProductController } from "./use-cases/find-product";
import { updateProductController } from "./use-cases/update-product";
import { deleteProductController } from "./use-cases/delete-product";

const router = Router();

router.get('/', (request, response) => {
  return response.send('Boticario Test API');
});

router.post("/products", (request, response) => {
  return createProductController.handle(request, response);
});

router.get("/products/:sku", (request, response) => {
  return findProductController.handle(request, response);
});

router.put("/products/:sku", (request, response) => {
  return updateProductController.handle(request, response);
});

router.delete('/products/:sku', (req, res) => {
  return deleteProductController.handle(req, res);
});

export { router };
