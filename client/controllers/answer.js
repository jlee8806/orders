app.controller('answerCtrl', ['$scope', 'answerFactory',  'questionFactory', 'userFactory','$routeParams', '$location', function($scope, aF, qF, uF, $routeParams, $loc){

  var id = $routeParams.id

  qF.question(id, function(data){
    console.log(data);
    $scope.question = data
  })
  uF.getUser(function(data){
    console.log(data);
    $scope.user = data
  })
  $scope.create = function(form){
    aF.create(id, form, function(res){
      $scope.answers = res;
      $loc.url('/home')
    })
  }




}])
