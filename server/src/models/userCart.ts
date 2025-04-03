import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define the attributes for the Product model
interface UserCartAttributes {
  id: number;
  buyer_id: number;
  product_id: number;
  quantity: number;
}

// Define the optional attributes for creating a new Product
interface UserCartCreationAttributes extends Optional<UserCartAttributes, 'id'> {}

// Define the userCart class extending Sequelize's Model
export class UserCart extends Model<UserCartAttributes, UserCartCreationAttributes> implements UserCartAttributes {
  public id!: number;
  public buyer_id!: number;
  public product_id!: number;
  public quantity!: number;
}

// Define the CategoryFactory function to initialize the User model
export function UserCartFactory(sequelize: Sequelize): typeof UserCart {
    UserCart.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      buyer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      tableName: 'user_cart',
      sequelize,
      timestamps: false
    }
  );

  return UserCart;
}