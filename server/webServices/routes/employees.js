const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const empController = require("../controllers/employees");

router.get("/", empController.emp_get_all);

router.post("/", empController.emp_post);

router.patch("/:employeeId", empController.emp_patch);

router.get("/:employeeId", empController.emp_get_by_ID);

router.delete("/:employeeId", empController.emp_delete_by_ID);

module.exports = router;