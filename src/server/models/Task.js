const { Schema, model } = require('mongoose');

const schema = new Schema({
    _id: {
      type: String,
      alias: 'code',
    },
    task_name:{
      type: String,
      required: true,
    }
    },
    {
      timestamps: { 
        createdAt: true, 
        // toJSON: {
        //   virtuals: true,
        // },
      }
    });

// same as the alias above
// schema.virtual('code').get(function () {
//   return this._id;
// })
console.log(schema.obj);

module.exports = model('Task', schema);