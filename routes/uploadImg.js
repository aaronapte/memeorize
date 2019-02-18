 var data = require("../data.json");
 count = 3;

exports.addFriend = function(request, response) {
 // Your code goes here
 var str = "#"+ request.query.subject;
 count++;
json = {'picture': "meme4.jpg",'caption': str,'postNumber': count};
 console.log("cs");
 console.log(json);
 data.memes.push(json);
 response.render('index', data);
}
