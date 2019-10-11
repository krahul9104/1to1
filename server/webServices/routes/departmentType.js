const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const deptType = require("../controllers/departmentType");

router.get("/", deptType.deptType_get_all);

router.post("/", deptType.deptType_post);

router.patch("/:departmentTypeId", deptType.deptType_patch);

router.get("/:departmentTypeId", deptType.deptType_get_by_ID);

router.delete("/:departmentTypeId", deptType.deptType_delete_by_ID);

module.exports = router;