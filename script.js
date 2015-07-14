$(window).load(function() {

  $(".endGameView").hide();
});

var questionBank ={
  0: ["Question 1: Do you like cake?", "2"],
  1: ["Question 2: Do you like pizza?","2"]
  // 2: ["Question 3: Do you like Cookie?","2"],
  // 3: ["Question 4: Do you like Walking?", "2"],
  // 4: ["Question 5: Do you like running?", "2"],
  // 5: ["Question 6: Do you like coding?", "2"],
  // 6: ["Question 7: Do you like poodles?", "2"]
}

var questionBank2 = {
  0:["Magic Mike is loosely inspired by the pre-fame, short-lived stripper career of which of its stars?","beta"]
}

function givePlayerScore(){

  $(".gameView").fadeOut(400,function(){
  $(".endGameView").fadeIn();
  });
  createScores();



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

    $(".result1").html("CORRECT!");
    $(".result1").fadeOut("slow");

    //insert border light up and "correct" feedback result
    score++;


  } else {

    $(".result1").html("INCORRECT!");
    $(".result1").fadeOut("slow");
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

            checkAnswer();
            event.stopPropogation();
      //replicate for event fired.
    }
  });
}
askQuestion();

//MAGIC TIME NSFW FOR INSECURE MEN.
$(".magictime").on("click",function(){
  if($("#css").attr("href") == "magic.css"){


    $("#css").attr("href","main.css");
    window.location.reload();

  } else{

    $("#css").attr("href","magic.css");
    $(".title").html("Trivia");
    questionBank = questionBank2;
    askQuestion();

  }
});

var prevPlayers = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var w = 500;
var h = 100;
var barPadding = 1;

function createScores(){
var svg = d3.select("div.endGameView")
  .append("svg")
  .attr("width", w)
  .attr("height", h);
var rect = svg.selectAll("rect");

rect.data(prevPlayers)
 .enter()
 .append("rect")
 .attr("x", function(d, i) { return i * (w / dataset.length);})
 .attr("width", w/ dataset.length - barPadding)
 .transition()
 .duration(1500)
 .delay(function(d,i){return i * 100;})

 .attr("height", function(d){ return d*4;})
 .attr("y", function(d){ return h - (d*4); })
 .attr("fill", function(d) { return "rgb(0, 0, " + (d * 10) + ")";});
 }
