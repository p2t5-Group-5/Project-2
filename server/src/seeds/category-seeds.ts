import { Category } from '../models/index.js';

export const seedCategories = async () => {
    await Category.bulkCreate([
        {id: 1, category: 'Household', description: 'Household items and kitchenware' },
        {id: 2, category: 'Toys', description: 'Handmade dolls and wooden toys' },
        {id: 3, category: 'Cards', description: 'Handmade card for holidays and special occasions' },
        {id: 4, category: 'Beer Mugs', description: 'Hand engraved beer mugs' },
    ], { individualHooks: true });
};

