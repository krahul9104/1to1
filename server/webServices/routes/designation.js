const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const dsgt = require("../controllers/designation");

router.get("/", dsgt.designation_get_all);

router.post("/", dsgt.designation_post);

router.patch("/:designationId", dsgt.designation_patch);

router.get("/:designationId", dsgt.designation_get_by_ID);

router.delete("/:designationId", dsgt.designation_delete_by_ID);

module.exports = router;