const express = require('express');
const {
  getAllProjects,
  addProject,
  updateProjectById,
  addTaskToProject,
  deleteProjectById
} = require('../controllers/project');

const router = express.Router();

router.get('', getAllProjects);
router.post('', addProject);
router.put('',updateProjectById);
router.post('/addtask',addTaskToProject);
router.delete('',deleteProjectById);

module.exports = router;