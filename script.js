var questionBank ={
  0: ["Question 1: Do you like cake?", "1"],
  1: ["Question 2: Do you like pizza?","beta"],
  // 2: ["Question 3: Do you like Cookie?","zeta"],
  // 3: ["Question 4: Do you like Walking?", "prime"],
  // 4: ["Question 5: Do you like running?", "yes"],
  // 5: ["Question 6: Do you like coding?", "no"],
  // 6: ["Question 7: Do you like crossfit?", "yes"]
}


function givePlayerScore(){

  $(".gameView").fadeOut(400,function(){
    $(".endGameView").fadeIn();
  });

}

var score = 0;
var i = 0;

function askQuestion(){

  $(".inputField").val("");
  $(".score").html(score);
  if(i >= Object.keys(questionBank).length){
    givePlayerScore();
} else{
  $("#question").html(questionBank[i][0]);
  getAnswer();
  }
}

function checkAnswer(){
  var playerAnswer = $(".inputField").val();
  var correctAnswer = questionBank[i-1][1];

  if (playerAnswer == correctAnswer){
    //insert border light up and "correct" feedback result
    score++;


  } else {
    //insert border light up and "incorrect" feedback result 
  }

  askQuestion();
}


function getAnswer(){

  $("#submitButton").on("click",function(event){
      i++;


      checkAnswer();
      event.stopPropogation();
  });


  $(".inputField").on("keydown",function(evt){
    if(evt.keyCode == 13){

      //replicate for event fired.
    }
  });
}
$(".endGameView").hide();
askQuestion();
