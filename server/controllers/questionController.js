var mongoose = require('mongoose');
var Question = mongoose.model('questions');

module.exports = (function(){
  return{

    index:function(req, res){
      Question.find({}, function(err, results){
        if(err){
          console.log(err);
        }else{
          res.json(results);
        }
      })
    },
    get: function(req, res){
      Question.findById(req.params.id).populate('answers').populate('_user')
      .exec( function(err, results){
        if(err){
          console.log(err);
        } else {
          res.json(results);
        }
      })
    },
    create: function(req, res){
      console.log(req.body);
      var question = new Question(req.body)
      question.save(function(err, results){
        if(err){
          console.log(err);
        } else{
          console.log(results);
          res.json(results);
        }
      })
    },

  }
})();
