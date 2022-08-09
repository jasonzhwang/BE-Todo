const express = require('express');
const {
  getAllProjects,
  addProject,
  addTaskToProject
} = require('../controllers/project');

const router = express.Router();

router.get('', getAllProjects);
router.post('', addProject);
router.post('',addTaskToProject);

module.exports = router;