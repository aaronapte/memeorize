$(document).ready(function() {
  $("#cancel").click(function(){
      console.log("testcancel");
      location.href='/';
  });

  $("#upload").click(function(){
    console.log(document.getElementById("uploadedImg").src);
    console.log($("#memeSubject option:selected").text());
    json = {
      picture: document.getElementById("uploadedImg").src,
      caption: $("memeSubject").val()
    }
    //data.memes.push(json);
  });
});
