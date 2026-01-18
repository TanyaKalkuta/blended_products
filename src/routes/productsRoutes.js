import { Router } from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} from '../controllers/productsController.js';

const productsRouter = Router();

productsRouter.get('/products', getProducts);
productsRouter.get('/products/:productId', getProductById);
productsRouter.post('/products', createProduct);
productsRouter.patch('/products/:productId', updateProduct);

export default productsRouter;
