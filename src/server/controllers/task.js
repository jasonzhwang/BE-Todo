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

module.exports = {
  getAllTasks,
  addTask,
};