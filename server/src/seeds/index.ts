import { seedUsers } from './user-seeds.js';
import { seedCategories } from './category-seeds.js';
import { seedProducts } from './product-seeds.js';
import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    // await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
