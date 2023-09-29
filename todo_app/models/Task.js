const mongoose = require('mongoose') 

const TaskSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, 'A name must be provided'],
    trim: true,
    maxlength: [20, 'Name cannot be longer 20 chars']
  }, 
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', TaskSchema)