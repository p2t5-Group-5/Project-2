import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define the attributes for the Product model
interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  category_id: number;
  price: number;
  seller_id: number;
  image_url: string;
}

// Define the optional attributes for creating a new Product
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

// Define the Product class extending Sequelize's Model
export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public category_id!: number;
  public seller_id!: number;
  public price!: number;
  public image_url!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Define the ProductFactory function to initialize the User model
export function ProductFactory(sequelize: Sequelize): typeof Product {
    Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seller_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'products',  // Name of the table in PostgreSQL
      sequelize,            // The Sequelize instance that connects to PostgreSQL
      hooks: {
        // // Before creating a new user, hash and set the password
        // beforeCreate: async (user: User) => {
        //   await user.setPassword(user.password);
        // },
        // // Before updating a user, hash and set the new password if it has changed
        // beforeUpdate: async (user: User) => {
        //   if (user.changed('password')) {
        //     await user.setPassword(user.password);
        //   }
        // },
      }
    }
  );

  return Product;  // Return the initialized User model
}
