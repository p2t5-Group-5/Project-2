import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { productRouter } from './product-routes.js';
import { userCartRouter } from './user-cart-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/userCart', userCartRouter);

export default router;
