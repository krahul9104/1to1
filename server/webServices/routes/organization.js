const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const orgController = require("../controllers/organization");

router.get("/", orgController.org_get_all);

router.get("/:organizationId", orgController.org_get_by_ID);

router.post("/", orgController.org_post);

router.patch("/:organizationId", orgController.org_patch);

router.delete("/:organizationId", orgController.orgs_delete_by_ID);

module.exports = router;