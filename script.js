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
            playerSelection = prompt ("Rock, Paper, Scissors: Choose your Weapon", );
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();
            if (playerSelection == computerSelection) {
                return "Draw";
            }
            else if (playerSelection == 'paper') {
                if (computerSelection == 'rock'){
                    playerCount++;
                    return "Paper beats rock, you Won"+'\n'+(' Your Score: ' + playerCount)+(' Computer Score: ' + computerCount);
                }
                else {
                    computerCount++;
                    return 'You Lose'+'\n'+(' Your Score: ' + playerCount)+(' Computer Score: ' + computerCount);
                }
            }
            else if (playerSelection == 'scissors'){
                if (computerSelection == 'paper'){
                    playerCount++;
                    return "Scissor beats paper, you Won"+'\n'+(' Your Score: ' + playerCount)+(' Computer Score: ' + computerCount);
                }
                else {
                    computerCount++;
                    return 'You Lose'+'\n'+(' Your Score: ' + playerCount)+(' Computer Score: ' + computerCount);
                }
            }
            else if (playerSelection == 'rock') {
                if (computerSelection == 'scissor'){
                    playerCount++;
                    return "Rock beats scissor, you Won"+'\n'+(' Your Score: ' + playerCount)+(' Computer Score: ' + computerCount);
                }
                else {
                    computerCount++;
                    return 'You Lose'+'\n'+(' Your Score: ' + playerCount)+(' Computer Score: ' + computerCount);
                }
            }
            else {
                alert ('Incorret answer');
            }
        }    
        console.log (playround(playerSelection, computerSelection));
    }    
}
console.log (game());


