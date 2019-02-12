$(document).ready(function() {
    $('#login-button').click(function(){
        console.log("test");
        $("body").load("loggedIn");
    });
    $('#login-back').click(function(){
        console.log("test");
        $("body").load("");
    });
});