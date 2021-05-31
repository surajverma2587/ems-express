const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    validate: {
      len: [2, 30],
    },
    allowNull: false,
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "department",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  modelName: "role",
  underscored: true,
  freezeTableName: true,
  timestamps: true,
};

class Role extends Model {}

Role.init(schema, options);

module.exports = Role;
