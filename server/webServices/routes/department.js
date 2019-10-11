const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const deptController = require("../controllers/department");

router.get("/", deptController.dept_get_all);

router.post("/", deptController.dept_post);

router.patch("/:departmentId", deptController.dept_patch);

router.get("/:departmentId", deptController.dept_get_by_ID);

router.delete("/:departmentId", deptController.dept_delete_by_ID);

module.exports = router;