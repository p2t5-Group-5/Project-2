import express from 'express';
import type { Request, Response } from 'express';
import { Category, Product } from '../../models/index.js';

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
      ], include: [
        { model: Category, as: 'Category', attributes: ['category'] }
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
      ], include: [
        { model: Category, as: 'Category', attributes: ['category'] }
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

// GET /products/:sellerId/products
router.get('/:sellerId/products', async (req: Request, res: Response) => {
  const { sellerId } = req.params;
  try {
    const products = await Product.findAll({
      where: { seller_id: +sellerId }
    });
    res.json(products);
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
    quantity,
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
      quantity,
      seller_id,
      image_url
    });
    res.status(201).json({ message: 'New Product was added' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /products/:id - Update a product by id
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { 
    name,
    description,
    price,
    image_url,
    category_id
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
    product.image_url = image_url;
    product.category_id = category_id;
    console.log('category_id here = = = = = = = = = = = = = =', product.category_id);
    // if (image_url && image_url.startsWith('data:image/')) {
    //   const base64Data = image_url.split(',')[1]; // Remove the prefix
    //   const buffer = Buffer.from(base64Data, 'base64'); // Decode base64 to binary
    //   product.image_url = buffer; // Store binary data
    // } else {
    //   throw new Error('Invalid image data');
    // }

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
