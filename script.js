$(window).load(function() {
  $(".endGameView").hide();
});

var questionBank ={
  0: ["Why is there something rather than nothing?-", "42"],
  1: ["Is our universe real?","42"],
  2: ["Do we have free will?","42"],
  3: ["Does God exist?", "42"],
  4: ["Is there life after death?", "42"],
  5: ["Can you really experience anything objectively?", "42"],
  6: ["What is the answer to everything?", "42"]
}

function givePlayerScore(){
  $(".gameView").fadeOut(400,function(){
    $(".endGameView").fadeIn();
  });
  $(".restart").on("click",function(){ location.reload()});
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
      score++;
    } else {
      $(".result1").html("INCORRECT!");
      $(".result1").fadeOut("slow");
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
//
//program start execution

askQuestion();

//////////////////////////////////////////////////D3 play around

//got to read off csv but forgot to branch off and
//messed something up so just defaulted to v.1 of viz.

//note: go back and read off csv, label axis and add name and scores.

var dataset = [ 5, 4, 3, 9, 2, 5, 2, 8,5, 3, 1, 2, 5, 2, 8, 7, 6, 8, 3, 5 ];



var w = 500;
var h = 100;
var barPadding = 1;

function createScores(){
var svg = d3.select("div.endGameView")
  .append("svg")
  .attr("width", w)
  .attr("height", h);
var rect = svg.selectAll("rect");

// also factore in more for scale down the road .
rect.data(dataset)
 .enter()
 .append("rect")
 .attr("x", function(d, i) { return i * (w / dataset.length);})
 .attr("width", w/ dataset.length - barPadding)
 .transition()
 .duration(1500)
 .delay(function(d,i){return i * 100;})

 .attr("height", function(d){ return d* 15;})
 .attr("y", function(d){ return h - (d* 15); })
 .attr("fill", function(d) { return "rgb(0, 0, " + (d * 20) + ")";});
 }
