$(document).ready(function() {
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
})
});