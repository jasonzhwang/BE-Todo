const Project = require('../models/project');

async function getAllProjects(req, res) {
  const projects = await Project.find().exec();
  res.json(projects);
}

async function addProject(req, res) {
  const { project_name } = req.body;
  console.log(project_name);
  const project = new Project({
      project_name
  });

  await project.save();
  return res.status(201).json(project);
}

async function addTaskToProject(req, res) {
  const { id, code } = req.params;
  const project = await Course.findById(code);
  const task = await Student.findById(id);
  if (!project || !task) {
    return res.sendStatus(404);
  }
  // transaction
  project.tasks.addToSet(task._id);
  await project.save();
  return res.json(project);
}

module.exports = {
  getAllProjects,
  addProject,
  addTaskToProject
};