app.controller('questionCtrl', ['$scope', 'questionFactory', 'answerFactory', 'userFactory','$location', '$routeParams', '$cookies', function($scope, qF, aF, uF, $loc, $routeParams, $cookies){

  var id = $routeParams.id
 //
 //  user = {
 //   name: $cookies.get("username"),
 //   id: $cookies.get("userid")
 // };

  qF.get_question(function(data){
    $scope.questions = data;
  })
  qF.question(id, function(data){
    $scope.question = data
  })
  uF.getUser(function(data){
    console.log(data);
    $scope.user = data
  })
  $scope.addQuestion = function(data){
    qF.create(data, function(res){
      $scope.questions = res;
      console.log(res);
      $loc.url('/home');
    })
  }
  $scope.like = function(aid){
    aF.like(aid, function(){
      qF.question(id, function(data){
        $scope.question = data
      })
    })
  }

}])
