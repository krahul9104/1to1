const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const goalsController = require('../controllers/goals');



router.get('/', goalsController.goals_get_all);

router.get('/:goalId', goalsController.goals_get_by_ID);

router.post('/', goalsController.goals_post);

router.patch('/:goalId', goalsController.goals_patch);

router.delete('/:goalId', goalsController.goals_dalete_by_ID);

module.exports = router;