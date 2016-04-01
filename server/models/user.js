var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name:{
      type:String
    },
    questions: [{type:Schema.Types.ObjectId, ref:'questions'}],
    answers: [{type:Schema.Types.ObjectId, ref:'answers'}]
})

mongoose.model('users', userSchema)
