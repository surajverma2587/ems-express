const { Router } = require("express");

const { Department, Role } = require("../../../models");

const router = Router();

router.get("/", async (req, res) => {
  const departments = await Department.findAll();
  res.json(departments);
});

router.get("/:id", async ({ params: { id } }, res) => {
  const department = await Department.findByPk(id);
  res.json(department);
});

router.get("/:id/roles", async ({ params: { id } }, res) => {
  const department = await Department.findAll({
    where: { id },
    include: [{ model: Role }],
  });
  res.json(department);
});

router.get("/:id/roles/:roleId", async ({ params: { id, roleId } }, res) => {
  const department = await Department.findAll({
    where: { id },
    include: [{ model: Role, where: { id: roleId } }],
  });
  res.json(department);
});

module.exports = router;
