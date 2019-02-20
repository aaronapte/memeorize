//get data
var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewHelp = function(req, res){
  console.log("help");
  res.render('help');
};
