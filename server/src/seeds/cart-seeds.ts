import { UserCart } from '../models/index.js';

export const seedUserCart = async () => {
  await UserCart.bulkCreate([
    {id: 1, buyer_id: 4, product_id: 1, quantity: 1},
    {id: 2, buyer_id: 5, product_id: 4, quantity: 1},
    {id: 3, buyer_id: 5, product_id: 11, quantity: 4},
    {id: 4, buyer_id: 5, product_id: 18, quantity: 5},
    {id: 5, buyer_id: 4, product_id: 22, quantity: 2},
  ], { individualHooks: true });
};

//Nothing currently in the cart table, so we will not be seeding it for now. Just leaving this here for future reference. -JH
