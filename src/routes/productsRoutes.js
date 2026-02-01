import { Router } from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController.js';
import { authenticate } from '../middleware/authenticate.js';

const productsRouter = Router();
productsRouter.use('/products', authenticate);
productsRouter.get('/products', getProducts);
productsRouter.get('/products/:productId', getProductById);
productsRouter.post('/products', createProduct);
productsRouter.patch('/products/:productId', updateProduct);
productsRouter.delete('/products/:productId', deleteProduct);

export default productsRouter;
