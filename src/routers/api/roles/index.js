const { Router } = require("express");

const { Department, Role, Employee } = require("../../../models");

const router = Router();

router.get("/", async (req, res) => {
  const roles = await Role.findAll();
  res.json(roles);
});

router.get("/:id", async ({ params: { id } }, res) => {
  const role = await Role.findByPk(id);
  res.json(role);
});

router.get("/:id/departments", async ({ params: { id } }, res) => {
  const role = await Role.findAll({
    where: { id },
    include: [{ model: Department }],
  });
  res.json(role);
});

router.get(
  "/:id/departments/:departmentId",
  async ({ params: { id, departmentId } }, res) => {
    const role = await Role.findAll({
      where: { id },
      include: [{ model: Department, where: { id: departmentId } }],
    });
    res.json(role);
  }
);

router.get("/:id/employees", async ({ params: { id } }, res) => {
  const role = await Role.findAll({
    where: { id },
    include: [{ model: Employee }],
  });
  res.json(role);
});

module.exports = router;
