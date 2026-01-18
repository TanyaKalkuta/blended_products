import { Router } from 'express';
import {
  getProducts,
  getProductsById,
} from '../controllers/productsController.js';

const productsRouter = Router();

productsRouter.get('/products', getProducts);
productsRouter.get('/products/:productId', getProductsById);

export default productsRouter;
