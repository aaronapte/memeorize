//get data
var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewHelpNL = function(req, res){
  console.log("helpNL");
  res.render('helpNL');
};

