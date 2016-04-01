app.factory('userFactory', ['$http', '$cookies', function($http, $cookies){
  var user = [];
  var factory = {};

  factory.getUser = function(callback){
    callback(user);
  }

  factory.create = function(form, callback){
    console.log('start factory');
    $http.post('/users', form)
    .success(function(res){
      console.log(res);
      // $cookies.put("username", res.name);
      // $cookies.put("userid", res._id)
      user = res;
      callback(user);
      console.log('finish factory');
    })
  }



 return factory;
}])
