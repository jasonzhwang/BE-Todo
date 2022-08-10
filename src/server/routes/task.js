const express = require('express');
const {
  getAllTasks,
  addTask,
  deleteTaskById
} = require('../controllers/task');

const router = express.Router();

router.get('', getAllTasks);
router.post('', addTask);
router.delete('',deleteTaskById);

module.exports = router;