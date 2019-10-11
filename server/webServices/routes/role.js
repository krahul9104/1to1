const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const role = require("../controllers/role");

router.get("/", role.role_get_all);

router.post("/", role.role_post);

router.patch("/:roleId", role.role_patch);

router.get("/:roleId", role.role_get_by_ID);

router.delete("/:roleId", role.role_delete_by_ID);

module.exports = router;