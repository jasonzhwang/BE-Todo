const { Schema, model } = require('mongoose');

const schema = new Schema({
    task_name:{
      type: String,
      required: true,
    }
    },
    {
      timestamps: { createdAt: true, updatedAt: false }
    });

module.exports = model('Task', schema);