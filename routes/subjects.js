 var data = require("../data.json");

exports.viewSubjects = function(req, res){
    res.render('subjects');
};

exports.searchSubjects = function(req, res){
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
  res.render('loggedIn', {"pictures": parsed});
}
