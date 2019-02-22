$(document).ready(function() {

	$('#art').click(function(){
		console.log("hello");
	})

	$("#cancel").click(function(){
      console.log("testcancel");
      location.href='/';
  });
    $('#login-profile-button').click(function(){
  location.href='/';
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

});
