import express from 'express';
import type { Request, Response } from 'express';
import { Product } from '../../models/index.js';

const router = express.Router();

// GET /products - Get all product
router.get('/', async (_req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      attributes: [
        'id',
        'name',
        'description',
        'category_id',
        'price',
        'seller_id',
        'image_url'
      ]
    });
    res.json(products);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /products/:id - Get a product by id
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, {
      attributes: [
        'id',
        'name',
        'description',
        'category_id',
        'price',
        'seller_id',
        'image_url'
      ]
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /products - Create a new product
router.post('/', async (req: Request, res: Response) => {
  const {
    name,
    description,
    category_id,
    price,
    seller_id,
    image_url,
  } = req.body;

  try {
    const product = await Product.findOne({ where: { name } });

    if (product) {
      throw new Error(`Product with name "${name}" already exsist`);
    }

    await Product.create({
      name,
      description,
      category_id,
      price,
      seller_id,
      image_url
    });
    res.status(201).json({ message: 'New Product was added' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /products/:id - Update a user by id
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { 
    name,
    description,
    price,
  } = req.body;
  try {
    const product = await Product.findByPk(id, {
      attributes: ['id', 'name', 'description', 'category_id', 'price', 'seller_id']
    });

    if (!product) {
      throw new Error('Product not found');
    }

    product.name = name;
    product.description = description;
    product.price = price;

    await product.save();
    res.json(product);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /products/:id - Delete a product by id
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, {
      attributes: ['id', 'name', 'description', 'category_id', 'price', 'seller_id']
    });

    if (!product) {
      throw new Error('Product not found');
    }
    
    await product.destroy();
    res.json({ message: 'Product deleted' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export { router as productRouter };
