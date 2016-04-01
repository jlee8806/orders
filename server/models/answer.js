var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new mongoose.Schema({
  answer:{
    type: String,
    required: true,
    minlength: 5
  },
  supp:{
    type: String
  },
  likes:{
    type: Number,
    default: 0
  },
  _question: {type: Schema.ObjectId, ref: 'questions'},
  _user: {type:Schema.ObjectId, ref:'users'}
})

mongoose.model('answers', answerSchema)
