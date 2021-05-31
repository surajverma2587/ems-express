const Department = require("./department");
const Employee = require("./employee");
const Role = require("./role");

Department.hasMany(Role, {
  foreignKey: "department_id",
});

Role.belongsTo(Department, {
  foreignKey: "department_id",
});

Role.hasMany(Employee, {
  foreignKey: "role_id",
});

Employee.belongsTo(Role, {
  foreignKey: "role_id",
});

Employee.belongsTo(Employee, {
  foreignKey: "manager_id",
  as: "employee_manager",
});

module.exports = { Department, Role, Employee };
