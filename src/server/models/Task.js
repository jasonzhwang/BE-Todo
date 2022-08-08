const { Schema, model } = require('mongoose');

const schema = new mongoose.Schema({
    task:{
      type: String,
      required: true,
    },
    timestamps:{
        createdAt: true,
    },
    });
const model = mongoose.model('Task', schema);

module.exports = model;