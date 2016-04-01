var mongoose = require('mongoose');
var Question = mongoose.model('questions');
var Answer = mongoose.model('answers');

module.exports = (function() {
  return{
    create: function(req, res){
      console.log(req.params.id);
      var answer = new Answer({
        _question : req.params.id,
        answer : req.body.answer,
        supp : req.body.supp
      })
      Question.findOne({_id:req.params.id} ,function(err, question){
        question.answers.push(answer);
        question.count ++
        question.save(function(err, results){
          if(err){
            console.log(err);
          } else {
            answer.save(function(err, results){
              if (err) {
                console.log(err);
              } else {
                res.json(results)
              }
            })
          }
        })
      })
    },
    like: function(req, res){
      Answer.findOne({_id:req.params.id}, function(err, answer){
        answer.likes ++;
        answer.save(function(err, results){
          if(err){
            console.log(err);
          } else {
            res.json(results);
          }
        })
      })
    }
  }
})();
