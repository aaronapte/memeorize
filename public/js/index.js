$( document ).ready(function() {
  if(sessionStorage.getItem("isLoggedIn") == "true")
  {
    $("body").load("loggedIn");
  }
  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
  });
});
 $('#login-profile-button').click(function(){
  location.href='login';
 });
 $("#uploadMainButton").click(function(){
     console.log("test");
     location.href='upload';
 });
 $('#subjects').click(function(){
        console.log("test");
        location.href='subjects';
    });
$( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
  });
});
