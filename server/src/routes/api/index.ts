import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { productRouter } from './product-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;
