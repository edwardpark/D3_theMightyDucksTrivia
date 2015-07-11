var questionBank ={
  1: ["Question 1: Do you like cake?", false],
  2: ["Question 2: Do you like pizza?",true],
  3: ["Question 3: Do you like Cookie?",true],
  4: ["Question 4: Do you like Walking?", false]
}
var answer; 
var trueButton = $(".trueB").on("click", function(){
  return answer = true;
});
var falseButton = $(".falseB").on("click",function(){
  return answer = false;
});

for(i in questionBank){

  $("#question").html(questionBank[i][0]);


}
