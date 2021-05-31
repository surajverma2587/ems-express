const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    validate: {
      len: [2, 30],
    },
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    validate: {
      len: [2, 30],
    },
    allowNull: false,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "role",
      key: "id",
    },
  },
  manager_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "employee",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  modelName: "employee",
  underscored: true,
  freezeTableName: true,
  timestamps: true,
};

class Employee extends Model {}

Employee.init(schema, options);

module.exports = Employee;
