let ranNumber = 0;
let playerscore = 0;


$(".play").click(function() {
        let playerChoice = $(".input").val();
        $(".choice").text(playerChoice);
       
        let computerResponse= getRandomComputerChoice();
       
            $(".computerChoice").text(computerResponse);
        
        chooseWinner(playerChoice, computerResponse);
        
    }

);
function win() {
    $(".result").text("You win!");

}

function lose() {
    $(".result").text("You lose!");

}

function draw() {
    $(".result").text("Draw");

}
function getRandomComputerChoice(){
    ranNumber = Math.ceil(Math.random() * 3);
     let computerChoice;
        if (ranNumber === 1) {
            
            computerChoice="rock";
        } else if  (ranNumber === 2) {
            
           computerChoice="scissors";
        } else {
            
          computerChoice="paper";
        }
        return computerChoice;
}

function chooseWinner(playerChoice, computerResponse){
   if (playerChoice === "scissors" && computerResponse === "rock") {
            lose();
            
        } else if (playerChoice === "paper" && computerResponse === "rock") {
            win();
            
        } else if (playerChoice === "rock" && computerResponse === "rock") {
            draw();
        } else if (playerChoice === "paper" && computerResponse === "scissors") {

            lose();
        } else if (playerChoice === "paper" && computerResponse === "paper") {

           draw();
        } else if (playerChoice === "scissors" && computerResponse === "scissors") {
           
            draw();
        } else if (playerChoice === "scissors" && computerResponse === "paper") {
            win();
            
        } else if (playerChoice === "rock" && computerResponse === "scissors") {
            win();
           
        } else if (playerChoice === "rock" && computerResponse === "paper") {

            lose();
        } else {

            $(".result").text("Please use rock, paper, or scissors");
        }

    
  
}
