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
  if (sessionStorage.getItem("isLoggedIn") == "false"){
    sessionStorage.setItem("isLoggedIn", "true");
    location.href='login';
  }
});
 $("#uploadMainButton").click(function(){
     console.log("test");
     location.href='upload';
 });
$( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
  });
});
