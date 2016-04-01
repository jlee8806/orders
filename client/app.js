var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl: "partials/home.html",
    controller: 'questionCtrl'
  })
  .when('/newquestion',{
    templateUrl: 'partials/newquestion.html',
    controller: 'questionCtrl'
  })
  .when('/question/:id',{
    templateUrl: 'partials/question.html',
    controller: 'questionCtrl'
  })
  .when('/answer/:id', {
    templateUrl: 'partials/answer.html',
    controller: 'answerCtrl'
  })
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'userCtrl'
  })
});
