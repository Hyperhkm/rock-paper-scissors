'use strict'
const shapeSelection = ['rock', 'paper', 'scissor'];
const computerSelection = getComputerChoice(shapeSelection);
let playerSelection;
function getComputerChoice (shapeSelection) {
    return shapeSelection [Math.floor(Math.random()*shapeSelection.length)];
}
function game(){
    let playerCount = 0;
    let computerCount = 0;
    playerSelection = prompt ("Rock, Paper, Scissors: Choose your Weapon", );
    function playround (playerSelection, computerSelection) {
            while (playerCount < 5 || computerCount < 5) {    
            playerSelection = prompt ("Rock, Paper, Scissors: Choose your Weapon", );
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();
            if (playerSelection == computerSelection) {
                return "Draw";
            }
            else if (playerSelection == 'paper') {
                if (computerSelection == 'rock'){
                    playerCount++;
                    return "Paper beats rock, you Won";
                }
                else {
                    computerCount++;
                    return 'You Lose';
                }
            }
            else if (playerSelection == 'scissors'){
                if (computerSelection == 'paper'){
                    playerCount++;
                    return "Scissor beats paper, you Won";
                }
                else {
                    computerCount++;
                    return 'You Lose';
                }
            }
            else if (playerSelection == 'rock') {
                if (computerSelection == 'scissor'){
                    playerCount++;
                    return "Rock beats scissor, you Won";
                }
                else {
                    computerCount++;
                    return 'You Lose';
                }
            }
            else {
                alert ('Incorret answer');
            }
                }
        console.log (playround(playerSelection, computerSelection));
        console.log ('Your Score: '+playerCount);
        console.log ('Computer Score: '+computerCount);
    }    
}


