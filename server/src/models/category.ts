import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define the attributes for the Product model
interface CategoryAttributes {
  id: number;
  category: string;
  description: string;
}

// Define the optional attributes for creating a new Product
interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

// Define the Category class extending Sequelize's Model
export class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  public id!: number;
  public category!: string;
  public description!: string;
}

// Define the CategoryFactory function to initialize the User model
export function CategoryFactory(sequelize: Sequelize): typeof Category {
    Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'categories',  // Name of the table in PostgreSQL
      sequelize,            // The Sequelize instance that connects to PostgreSQL
      hooks: {
        // // Before creating a new category, check that the category doesn't already exist?
      }
    }
  );

  return Category;  // Return the initialized User model
}