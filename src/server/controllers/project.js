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

module.exports = {
  getAllProjects,
  addProject,
};