//get data
var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewSubjectsNL = function(req, res){
  console.log("subjectsNL");
  res.render('subjectsNL');
};

