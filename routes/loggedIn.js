var data = require('../data.json');
exports.viewLoggedIn = function(req, res){
    res.render('loggedIn', {"pictures": data.memes});
  };