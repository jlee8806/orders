app.factory('questionFactory', function($http){
  var questions = [];
  var answers = [];
  var question = [];
  var factory = {};

  factory.get_question = function(callback){
    $http.get('/questions').success(function(output){
      questions = output;
      console.log(questions);
      callback(questions);
    })
  }
  factory.question = function(id, callback){
    $http.get('/questions/'+ id).success(function(output){
      question = output;
      console.log(question);
      callback(question);
    })
  }
  factory.create = function(form, callback){
    console.log(form);
    $http.post('/questions', form).success(function(output){
      questions = output;
      console.log(output);
      callback(questions);
    })
  }
  return factory;
})
