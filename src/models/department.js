const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    validate: {
      len: [2, 30],
    },
    allowNull: false,
  },
};

const options = {
  sequelize,
  modelName: "department",
  underscored: true,
  freezeTableName: true,
  timestamps: true,
};

class Department extends Model {}

Department.init(schema, options);

module.exports = Department;
