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

// async function addTaskToProject(req, res) {
//   const { id, code } = req.params;
//   const project = await Course.findById(code);
//   const task = await Student.findById(id);
//   if (!project || !task) {
//     return res.sendStatus(404);
//   }
//   // transaction
//   project.tasks.addToSet(task._id);
//   await project.save();
//   return res.json(project);
// }

async function deleteProjectById(req, res) {
  // console.log(req);
  const { id } = req.query;
  console.log(id);
  const project = await Project.findByIdAndRemove(id).exec();
  if (!project) {
    return res.status(404).json({
      error: 'project not found',
    });
  }
  // delete student reference
  res.sendStatus(204);
}

module.exports = {
  getAllProjects,
  addProject,
  // addTaskToProject
  deleteProjectById
};