app.factory('answerFactory', function($http){
  var question = [];
  var answers = [];
  var factory = {};

  factory.question = function(id, callback){
    $http.get('/questions/'+ id).success(function(output){
      question = output;
      console.log(question);
      callback(question);
    })
  }
  factory.create = function(id, form, callback){
    console.log(id);
    console.log(form);
    $http.post('/answers/'+ id, form).success(function(output){
      answers = output;
      console.log(answers);
      callback(answers)
    })
  }
  factory.like = function(id, callback){
    console.log(id);
    $http.put('/likeanswer/' +id).success(function(output){
      console.log('worked?');
      console.log(output);
      callback(output);
    })
  }

  return factory;
})
