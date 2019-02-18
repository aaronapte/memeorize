 var data = require("../data.json");

exports.addFriend = function(request, response) {
 // Your code goes here
 var str = "#"+ request.query.subject;
 json = {'picture': "meme4.jpg",'caption': str};
 console.log("cs");
 console.log(json);
 data.memes.push(json);
 response.render('index', data);
}
