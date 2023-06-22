const computerChoice = function () {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissor';        
    }
}

function game () {
    let playerCount = 0, computerCount = 0;

    function playGame() {
        const score = document.querySelector('#score');
        const btnPaper = document.querySelector('button[value="paper"]')
        const btnScissor = document.querySelector('button[value="scissor"]')
        const btnRock = document.querySelector('button[value="rock"]')
        const playerOptions = [btnPaper, btnRock, btnScissor];
        
        playerOptions.forEach (option => {
            option.addEventListener('click', function() {
                winner (this.innerText.toLowerCase(), computerChoice());
                if (playerCount == 5) {playerCount = 0, computerCount = 0; return score.textContent = 'You are the winner'};
                if (computerCount == 5) {playerCount = 0, computerCount = 0; return score.textContent = 'You lost the game'};
            })
        })
    }

    const winner = function (player, computer) {
        const scoreTable = `Your score: ${playerCount} Computer score: ${computerCount}`;
        switch (true) {
            case player == computer: 
                score.textContent = "It's a draw\n"+scoreTable;
                break;
            case player == 'paper' && computer == 'rock':
                playerCount++;    
                score.textContent = 'You won, paper beats rock!\n'+scoreTable;
                break;
            case player == 'rock' && computer == 'scissor':
                playerCount++;
                score.textContent = 'You won, rock beats scissor\n'+scoreTable;
                break;
            case player == 'scissor' && computer == 'paper':
                playerCount++;    
                score.textContent = 'You won, scissor beats paper\n'+scoreTable;
                break;
            default: 
                computerCount++;
                score.textContent = 'You lost the round\n'+scoreTable;
                break;        
        }
    }
    playGame();
}
game();
