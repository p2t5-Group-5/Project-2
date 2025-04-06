import sequelize from '../config/connection.js'
import { UserFactory } from './user.js';
import { CategoryFactory } from './category.js';
import { ProductFactory } from './product.js';
import { UserCartFactory } from './userCart.js';

const User = UserFactory(sequelize);
const Category = CategoryFactory(sequelize);
const Product = ProductFactory(sequelize);
const UserCart = UserCartFactory(sequelize);

Product.associate({ UserCart });
UserCart.associate({ Product });

export { User, Category, Product, UserCart };
