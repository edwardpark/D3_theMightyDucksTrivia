var questionBank ={
  1: ["Question 1: Do you like cake?", "false"],
  2: ["Question 2: Do you like pizza?",true],
  3: ["Question 3: Do you like Cookie?",true],
  4: ["Question 4: Do you like Walking?", false]
}
var i = 1;
function askQuestion(){
  $("#question").html(questionBank[i][0]);
  getAnswer();
}

function checkAnswer(){
  var playerAnswer = $(".inputField").val();
  var correctAnswer = questionBank[i][1];

  if (playerAnswer == correctAnswer){
    console.log("great job correct!");
  }

}


function getAnswer(){
  $(".submitButton").on("click",function(){
      console.log("event fired!");
      checkAnswer();
  });
  $(".inputField").on("keydown",function(evt){
    if(evt.keyCode == 13){
      console.log("event fired!");
      //replicate for event fired.
    }
  });
}

askQuestion();
