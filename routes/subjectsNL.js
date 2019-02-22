//get data
var data = require('../data.json');

/*
 * GET home page.
 */

exports.viewSubjectsNL = function(req, res){
  console.log("subjectsNL");
  res.render('subjectsNL');
};

exports.searchSubjectsNL = function(req, res){
  console.log("reached");
  //var str = req.query.search;
  console.log("Before: " + req.query.subject)
  //str = str.replace(/\s/g,'')
  var filter = "#" + req.query.subject.replace(/\s/g,'');
  console.log("After: " + filter);
  var parsed = data.memes.filter(function (entry) {
    console.log(entry);
    return entry.caption == filter;
  });
  if(filter == "#")
  {
    parsed = data.memes;
  }
  res.render('index', {"pictures": parsed});
}
