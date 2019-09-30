const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const goalsController = require('../controllers/goals');
const checkAuth = require('../middleware/check_auth');



router.get('/', checkAuth, goalsController.goals_get_all);

router.get('/:goalId', goalsController.goals_get_by_ID);

router.post('/', goalsController.goals_post);

router.patch('/:goalId', goalsController.goals_patch);

router.delete('/:goalId', goalsController.goals_dalete_by_ID);

module.exports = router;