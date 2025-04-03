import express from 'express';
import type { Request, Response } from 'express';
import { UserCart } from '../../models/index.js';

const router = express.Router();

// GET /userCart/:userId - Get all items in user's cart
router.get('/:userId', async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const cartItems = await UserCart.findAll(
            {
                where: { buyer_id: +userId },
                attributes: ['buyer_id', 'product_id', 'quantity']
            }
        );
        if (!cartItems) {
          throw new Error("User's cart is empty");
        }

        res.json(cartItems);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// POST /userCart/:userId - Add item to user's cart
router.post('/:userId', async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;
    try {
        const item = await UserCart.findOne({
            where: { buyer_id: +userId, product_id: productId }
        });

        if (item) {
          throw new Error("Item is already added to the cart");
        }
  
        await UserCart.create({
          buyer_id: +userId,
          product_id: productId,
          quantity
        });
        res.json({ message: 'Item was added to the cart' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
});

// PUT /userCart/:userId - Update quantity for a product
router.put('/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;
  try {
    const item = await UserCart.findOne({
        where: { buyer_id: +userId, product_id: productId}
    });

    if (!item) {
        throw new Error("User doesn't have this item in the cart");
    }

    item.quantity = quantity;
    await item.save();
    res.json({ message: 'The quantity was updated'});
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /userCart/:userId - Delete item from user's cart
router.delete('/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { productId } = req.body;
  try {
    const item = await UserCart
        .findOne({ where: { buyer_id: +userId, product_id: productId } });

    if (!item) {
        throw new Error("This item is not in the user's cart")
    }

    await item.destroy();
    res.json({ message: "Item was removed from user's cart" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as userCartRouter };
