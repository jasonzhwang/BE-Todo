const express = require('express');
const projectRouter = require('./project');
const taskRouter = require('./task');

const router = express.Router();

router.use('/projects', projectRouter);
router.use('/tasks', taskRouter);

module.exports = router;