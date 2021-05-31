const sequelize = require("../../config/connection");
const { Department, Role, Employee } = require("../../models");

const departments = require("./departments.json");
const roles = require("./roles.json");
const employees = require("./employees.json");

const managers = {
  1: 3,
  2: 3,
  3: 4,
  4: 5,
  9: 2,
};

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Department.bulkCreate(departments);
  console.log("Departments seeded successfully");

  await Role.bulkCreate(roles);
  console.log("Roles seeded successfully");

  await Employee.bulkCreate(employees);
  console.log("Employees seeded successfully");

  await Employee.update({ manager_id: 3 }, { where: { id: 1 } });
  await Employee.update({ manager_id: 3 }, { where: { id: 2 } });
  await Employee.update({ manager_id: 4 }, { where: { id: 3 } });
  await Employee.update({ manager_id: 5 }, { where: { id: 4 } });
  await Employee.update({ manager_id: 2 }, { where: { id: 9 } });

  console.log("Updated all employee managers successfully");

  process.exit(0);
};

seedDatabase();
