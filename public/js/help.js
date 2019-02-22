

$(document).ready(function() {

	 $('#cancel').click(function(){
       location.href='/';
    });
 $('#login-profile-button').click(function(){
  location.href='loggedin';
 });
 $("#uploadMainButton").click(function(){
     console.log("test");
     location.href='upload';
 });
 $('#subjects').click(function(){
        console.log("test");
        location.href='subjects';
    });
$('#help').click(function(){
  location.href='help';
});

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

});