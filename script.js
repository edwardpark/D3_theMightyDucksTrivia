var questionBank ={
  0: ["Question 1: Do you like cake?", "1"],
  1: ["Question 2: Do you like pizza?","beta"],
  2: ["Question 3: Do you like Cookie?","zeta"],
  3: ["Question 4: Do you like Walking?", "prime"],
  4: ["Question 5: Do you like running?", "yes"],
  5: ["Question 6: Do you like coding?", "no"],
  6: ["Question 7: Do you like crossfit?", "yes"]
}

function givePlayerScore(){
  console.log("CONGRADS THIS IS THE END OF THE PROGRAM");
}

var score = 0;
var i = 0;

function askQuestion(){
  console.log(i);
  $(".inputField").val("");
  $(".score").html(score);
  if(i >= Object.keys(questionBank).length ){ //note: that program isn't registering this at all.
    console.log("THIS IS THE END!");
    givePlayerScore();
  }else {

  $("#question").html(questionBank[i][0]);
  getAnswer();
  }
}

function checkAnswer(){
  console.log("checkAnswer Fired!");
  var playerAnswer = $(".inputField").val();
  console.log("playerAnswer was: "+ playerAnswer);
  var correctAnswer = questionBank[i-1][1];
  console.log("correctAnswer Was: "+ correctAnswer);

  if (playerAnswer == correctAnswer){
    console.log("great job correct!");//replace with CSS visual
    score++;


  } else {
    console.log("incorrect answer dumbshite!");
  }

  askQuestion();
}


function getAnswer(){

  $("#submitButton").on("click",function(event){
      i++;
      console.log("on click event fired!");

      checkAnswer();
      event.stopPropogation();
  });


  $(".inputField").on("keydown",function(evt){
    if(evt.keyCode == 13){
      console.log("keydown event fired!");
      //replicate for event fired.
    }
  });
}

askQuestion();
