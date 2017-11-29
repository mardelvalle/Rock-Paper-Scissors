/*three buttons and when the buttons are clicked the computer chooses a rondome result and the result is checked in an if else statement to see who the winner is..
There is an if else and else if and three sets of if statements.
Some sort of message span that is the result of the if else statement
TThen a score board that has an addition for each victory
*/
$(document).ready(function(){
  let winning=0
  let tieing=0
  let losing=0
  $("#rock").on('click',function(){
    let number=Math.floor(Math.random()*3)
    console.log(number)
    if(number==0){
      winning++
      // document.getElementById("result").innerHTML="You win";
      $("#win").html("Wins: "+winning)
      $("#result").html("You win")
    }
    else if(number==1){
      tieing++
      $("#tie").html("Ties: "+tieing)
      $("#result").html("You tied")
    }
    else{
      losing++
      $("#lose").html("Losses: "+losing)
      $("#result").html("You lost. Try again")
    }
  })
  $("#paper").on('click',function(){
    let number=Math.floor(Math.random()*3)
    console.log(number)
    if(number==0){
      winning++
      $("#win").html("Wins: "+winning)
      $("#result").html("You win")
    }
    else if(number==1){
      tieing++
      $("#tie").html("Ties: "+tieing)

      $("#result").html("You tied")
    }
    else{
      losing++
      $("#lose").html("Losses: "+losing)
      $("#result").html("You lost. Try again")
    }
  })
  $("#scissors").on('click',function(){
    let number=Math.floor(Math.random()*3)
    console.log(number)
    if(number==0){
      winning++
      $("#win").html("Wins: "+winning)
      $("#result").html("You win")
    }
    else if(number==1){
      tieing++
      $("#tie").html("Ties: "+tieing)
      $("#result").html("You tied")
    }
    else{
      losing++
      $("#lose").html("Losses: "+losing)
      $("#result").html("You lost. Try again")
    }
  })
})
