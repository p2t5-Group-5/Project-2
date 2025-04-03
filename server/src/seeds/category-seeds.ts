import { Category } from '../models/index.js';

export const seedCategories = async () => {
    await Category.bulkCreate([
        {id: '1', category: 'Electronics', description: 'Devices and gadgets' },
        {id: '2', category: 'Clothing', description: 'Apparel and accessories' },
        {id: '3', category: 'Household', description: 'Household items and kitchenware' },
        {id: '4', category: 'Books', description: 'Literature and educational materials' },
        {id: '5', category: 'Toys', description: 'Childrens toys and games' },
        {id: '6', category: 'Food', description: 'Groceries and consumables' },
    ], { individualHooks: true });
};

