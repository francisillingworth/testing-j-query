$(document).ready(function(){
 
 $(".theButton").click(function(){
  $("#panel").children().fadeTo(1 , 0.2);
   })
 
  $(".superButton").click(function(){
  $("#panel").children().fadeTo(1 , 1);
   })
 
 $(".theButton").mouseenter(function(){
  $(this).addClass("makeBlack");
   })
   
    $(".theButton").mouseleave(function(){
  $(this).removeClass("makeBlack");
   })
   
   $(".theButton").click(function(){
  $(".superButton").addClass("makeBlack");
   })
 
   
 
 
});