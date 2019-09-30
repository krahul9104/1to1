const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const oneonone_review = require("../controllers/oneonone_review");

router.get("/", oneonone_review.oneonone_review_get_all);

router.post("/", oneonone_review.oneonone_review_post);

router.patch("/:oneononer_Id", oneonone_review.oneonone_review_patch);

router.get("/:oneonone_Id", oneonone_review.oneonone_review_get_by_ID);

router.delete("/:oneonone_id", oneonone_review.oneonone_review_delete_by_ID);

module.exports = router;