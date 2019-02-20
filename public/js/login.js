$(document).ready(function() {
  sessionStorage.setItem("isLoggedIn", "false");
 console.log(sessionStorage.getItem("isLoggedIn"));
    $('#login-button').click(function(){
        console.log("test");
        if (sessionStorage.getItem("isLoggedIn") == "false"){
          sessionStorage.setItem("isLoggedIn", "true");
          console.log("this worked");
        }
       location.href='/';
    });
    $('#login-back').click(function(){
        console.log("test");
        location.href='/';
    });
    
});
