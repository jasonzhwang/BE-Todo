const express = require('express');
const {
  getAllTasks,
  addTask,
} = require('../controllers/task');

const router = express.Router();

router.get('', getAllTasks);
router.post('', addTask);

module.exports = router;