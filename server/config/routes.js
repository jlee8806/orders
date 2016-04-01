var questions = require('./../controllers/questionController.js');
var answers = require('./../controllers/answerController.js');
var users = require('./../controllers/userController.js')

module.exports = function(app){

  app.post('/users', users.create);

  app.get('/questions', questions.index);
  app.get('/questions/:id', questions.get);
  app.post('/questions', questions.create);

  app.post('/answers/:id', answers.create);
  app.put('/likeanswer/:id', answers.like);

}
