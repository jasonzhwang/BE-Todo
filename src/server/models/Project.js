const { Schema, model } = require('mongoose');

const schema = new Schema({
    project_name:{
      type: String,
      required: true,
    },
    tasks:[
        {
          type: Schema.Types.ObjectId,
          ref: 'Task',
        },
      ],
    },
    {
      timestamps: { createdAt: true, updatedAt: false }
    }
    );

module.exports = model('Project', schema);