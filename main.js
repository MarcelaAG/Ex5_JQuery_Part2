$(document).ready(function(){
    $("input").focusin(function(){
      $(this).css("border", "2px solid green");
    });
    $("input").focusout(function(){
      $(this).css("border","2px solid red");
    });
  });


