const express = require('express');
const {
  getAllProjects,
  addProject,
} = require('../controllers/project');

const router = express.Router();

router.get('', getAllProjects);
router.post('', addProject);

module.exports = router;