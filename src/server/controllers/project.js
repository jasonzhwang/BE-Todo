const Project = require('../models/project');
const Task = require('../models/task');


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
  console.log("addtasktoproject in")
  const { id, code } = req.query;
  console.log(`${id},${code}`);
  const project = await Project.findById(id);
  const task = await Task.findById(code);
  console.log(`${project},${task}`);
  if (!project || !task) {
    return res.sendStatus(404);
  }
  // transaction
  project.tasks.addToSet(task);
  await project.save();
  return res.status(201).json(project);
}

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

async function updateProjectById(req, res) {
  const { id } = req.query;
  const { project_name } = req.body;
  console.log(id, project_name);
  const project = await Project.findByIdAndUpdate(id,{ project_name },{ new: true }).exec();
  if (!project) {
    return res.status(404).json({
      error: 'project not found',
    });
  }
  res.sendStatus(204);
}

// async function addTaskToProject(req, res) {
//   const { task_name } = req.body;
//   console.log(task_name);
//   const task = new Project({
//       task_name
//   });
//   const { id, code } = req.params;
//   // const addedtask = await Task.findById(code);
//   const project = await Project.findById(id);
//   if (!project || !addedtask) {
//     return res.sendStatus(404);
//   }
//   // transaction
//   project.tasks.addToSet(task.code);
//   await project.save();
//   await task.save();
//   return res.json(project);
// }

module.exports = {
  getAllProjects,
  addProject,
  updateProjectById,
  addTaskToProject,
  deleteProjectById,
};