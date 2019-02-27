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
 //$("#uploadMainButton").click(function(){
     //console.log("test");
     //location.href='upload';
 //});
$("#cancel").click(function(){
      console.log("testcancel");
      location.href='/';
  });
 
 $('#subjects').click(function(){
        console.log("test");
        location.href='subjectsNL';
    });
$('#help').click(function(){
  if(sessionStorage.getItem("isLoggedIn")=="true")
    location.href='helpNL';
  else if(sessionStorage.getItem("isLoggedIn")=="false"){
    location.href = 'login'
  }
});
$( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
  });
});
