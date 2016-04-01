var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    minlength: 10
  },
  descrip: {
    type: String
  },
  count:{
    type: Number,
    default: 0
  },
  answers: [{type:Schema.ObjectId, ref:'answers'}],
  _user: {type:Schema.ObjectId, ref:'users'}
})

mongoose.model('questions', questionSchema)
