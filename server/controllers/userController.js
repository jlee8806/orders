var mongoose = require('mongoose');
var User = mongoose.model('users');


module.exports = (function(){
  return{
    create: function(req,res){
      var user = new User(req.body)
      user.save(function(err, results){
        if(err){
          console.log(err);
        }else{
          res.json(results);
        }
      })
    }
  }
})();
