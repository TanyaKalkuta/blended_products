import { Router } from "express";
import { getProducts, getProductById, createProduct } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get('/products', getProducts);
productsRouter.get('/products/:productId', getProductById);
productsRouter.post('/products', createProduct);

export default productsRouter;
