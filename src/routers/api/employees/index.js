const { Router } = require("express");

const {
  Department,
  Role,
  Employee,
  EmployeeManager,
} = require("../../../models");

const router = Router();

router.get("/", async (req, res) => {
  const employees = await Employee.findAll({
    include: [
      {
        model: Role,
        include: [{ model: Department }],
      },
      { model: Employee, as: "employee_manager" },
    ],
  });
  res.json(employees);
});

router.get("/:id", async ({ params: { id } }, res) => {
  const employee = await Employee.findByPk(id);
  res.json(employee);
});

router.get("/:id/roles", async ({ params: { id } }, res) => {
  const employee = await Employee.findAll({
    where: { id },
    include: [{ model: Role }],
  });
  res.json(employee);
});

router.get("/:id/roles/:roleId", async ({ params: { id, roleId } }, res) => {
  const employee = await Employee.findAll({
    where: { id },
    include: [{ model: Role, where: { id: roleId } }],
  });
  res.json(employee);
});

module.exports = router;
