'use strict'
const shapeSelection = ['rock', 'paper', 'scissor'];
let playerSelection;
function getComputerChoice (shapeSelection) {
    return shapeSelection [Math.floor(Math.random()*shapeSelection.length)];
}
function game(){
    for (let playerCount = 0, computerCount = 0; playerCount < 5 && computerCount < 5;){  
        const computerSelection = getComputerChoice(shapeSelection);
        function playround (playerSelection, computerSelection) {  
            playerSelection = prompt ("Rock, Paper, Scissor: Choose your Weapon", ).toLowerCase();
            console.log ("Your score: " + playerCount + " Computer score: " + computerCount);
            if (playerSelection == computerSelection) {
                return "Draw";
            }
            else if (playerSelection == 'paper' && computerSelection == 'rock') {
                playerCount++;
                return "Paper beats rock, you Won";
            }
            else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                playerCount++;
                return "Scissor beats paper, you Won";
            }
            else if (playerSelection == 'rock' && computerSelection == 'scissor') {
                playerCount++;
                return "Rock beats scissor, you Won";
            }
            else {
                if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissor') {
                    computerCount++
                    return console.log ('You lost'); 
                }
                else {
                    return alert ("Incorrect, type again");
                }    
            }
        }    
        console.log (playround(playerSelection, computerSelection));
    } 
}
console.log (game());