
var gamePattern = [];
var buttonColors = [
    "red","blue","green","yellow"];
    

  var  userClickedPattern = [];
  
 var started = false;
  var level = 0;




  $(document).keypress(function() {
    if (!started) {
  
      
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  
function nextSequence(){
   level++;
   $("#level-title").text("Level " + level);
   

    var randomNumber = Math.floor(Math.random() * 3);
    var  randomChosenColors = buttonColors[randomNumber];
    gamePattern.push(randomChosenColors);
}

$("#"+gamePattern).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  $(".btn").click(function(){
    
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
 
  })

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor){
$("#")+currentColor.addClass("pressed");

setTimeout(function() {
  
}, 100);
  
}
 

