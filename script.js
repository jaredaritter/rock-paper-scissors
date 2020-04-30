// GENERATES COMPUTER'S CHOICE RAMDOMLY
function computerPlay(){
    const random = Math.floor(Math.random() * Math.floor(3));
    switch (random){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            console.log("COMPUTERPLAY ERROR");
    }
}

// LOGIC FOR SINGLE ROUND OF PLAY. BASIC EXCLUSION OF INCORRECT PLAYER INPUTS. CALLS FUNCTION TO UPDATE GAME. I'M SURE THERE IS A CLEANER WAY TO IMPLEMENT THIS THAN IF-ELSE LOGIC. 
function playRound() {
    resetBorders();
    const gameResult = document.querySelector('#gameResult')
    if (gameResult.textContent !== "") return; // STOPS FURTHER PLAY IF GAME COMPLETE
    const playerSelection = this.id;
    const computerSelection = computerPlay();
    let result = document.querySelector('#result');


    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        result.textContent = "Player is cheating!";
    } else if (playerSelection === computerSelection) {
        result.textContent = `Draw! ${playerSelection} ties ${computerSelection}`;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
               (playerSelection === 'paper' && computerSelection === 'rock') || 
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        
    } else {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    this.style.borderTop = '4px solid green';
    document.querySelector('#' + computerSelection).style.borderBottom = '4px solid red';

    updateGame();
}

// UPDATES PAGE WITH MATCH INFORMATION AND SCORE. PRINTS WIN STATEMENT.
function updateGame() {
    const result = document.querySelector('#result');
    const gameResult = document.querySelector('#gameResult');
    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');
    let playerScore = Number(player.textContent);
    let computerScore = Number(computer.textContent);
    
    if (result.textContent.includes('win')) {
        playerScore++;
    } else if (result.textContent.includes('lose')) {
        computerScore++;
    }

    if (playerScore === 5 || computerScore === 5) {
        gameResult.textContent = `${playerScore === 5 ? "Player" : "Computer"} wins game!`
    }

    player.textContent = playerScore;
    computer.textContent = computerScore;
}

// RESETS GAME STATE TO BEGINNING
function resetGame() {
    const result = document.querySelector('#result');
    const gameResult = document.querySelector('#gameResult');
    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');

    result.textContent = "New game ready";
    player.textContent = "0";
    computer.textContent = "0";
    gameResult.textContent = "";
}

function resetBorders() {
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => choice.style.border = 'none');
}

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => {
    choice.addEventListener('click', playRound);
})

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGame);