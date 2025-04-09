import express from 'express';
import type { Request, Response } from 'express';
import { Category } from '../../models/index.js';

const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'category'],
    });
    res.json(categories);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as categoryRouter };
