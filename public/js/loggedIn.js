$( document ).ready(function() {

  $('#login-profile-button').append("Profile");
  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
  });
  console.log('working as intended');
});
$('#login-profile-button').click(function(){
  if (loggedIn == false){
    loggedIn==true;
    $("body").load("login");
  }
});
 $("#uploadMainButton").click(function(){
     console.log("test");
     $("body").load("upload")
 });
$( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
  });
});
