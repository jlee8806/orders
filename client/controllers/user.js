app.controller('userCtrl', ['$scope', 'userFactory','$cookies', '$location', function($scope, uF, $cookies, $loc){

  // factory.index = function(){
  //   $cookies.remove('name'),
  //   $cookies.remove('id')
  // }
  // factory.index();

  $scope.newUser = function(form) {
    uF.create(form, function(res){
      console.log('back to ctrl');
      $scope.user = res;
      $loc.url('/home')
    })
  }




}])
