const express = require('express');
const {
  getAllProjects,
  addProject,
  // addTaskToProject
  deleteProjectById
} = require('../controllers/project');

const router = express.Router();

router.get('', getAllProjects);
router.post('', addProject);
// router.post('',addTaskToProject);
router.delete('',deleteProjectById);

module.exports = router;