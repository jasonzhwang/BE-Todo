const Task = require('../models/task');

async function getAllTasks(req, res) {
  const tasks = await Task.find().exec();
  res.json(tasks);
}

async function addTask(req, res) {
  const { task_name } = req.body;
  console.log(task_name);
  const task = new Task({
      task_name
  });

  await task.save();
  return res.status(201).json(task);
}

async function deleteTaskById(req, res) {
  // console.log(req);
  const { code } = req.query;
  console.log(code);
  const task = await Task.findByIdAndRemove(code).exec();
  console.log(task);
  if (!task) {
    return res.status(404).json({
      error: 'task not found',
    });
  }
  // delete student reference
  res.sendStatus(204);
}

module.exports = {
  getAllTasks,
  addTask,
  deleteTaskById
};