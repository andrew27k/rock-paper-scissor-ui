const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";

const START_BTN = document.getElementById('start-btn');

const robotOption = document.createElement('div');
robotOption.textContent = '🤖';
robotOption.classList.add('computerChoice');

const playerOption = document.createElement('div');
playerOption.textContent = '😋';
playerOption.classList.add('playerChoice');


const rockId = document.getElementById('rock');
const paperId = document.getElementById('paper');
const scissorId = document.getElementById('scissor');

const info = document.querySelector('.gameInfo');
const roundInfo = document.querySelector('.roundInfo');

const playerCounter = document.getElementById('playerCounter');
const computerCounter = document.getElementById('computerCounter');



let getComputerChoice = () => {
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random() *3 ) + 1;
    if (randomNumber === 1) {
        rockId.appendChild(robotOption);
        computerChoice = ROCK;
    } else if (randomNumber === 2) {
        paperId.appendChild(robotOption);
        computerChoice = PAPER;
    } else {
        scissorId.appendChild(robotOption);
        computerChoice = SCISSOR;
    }
    return computerChoice;
}

const option = document.querySelectorAll('.option-section')





let getHumanChoice = (e) => {

    let humanChoice = e.target.id;
    let answer;

    if(humanChoice === "rock") {
        answer = ROCK;
        rockId.appendChild(playerOption);
    }else if ( humanChoice === "paper") {
        answer = PAPER;
        paperId.appendChild(playerOption);
    } else if ( humanChoice === "scissor") {
        answer = SCISSOR;
        scissorId.appendChild(playerOption);
    }

    playRound(answer, getComputerChoice());
}

option.forEach(button => {
        button.addEventListener('click', getHumanChoice)
    })



    let humanScore = 0;
    let computerScore = 0;
    let maxScore = 5;



let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice){
            roundInfo.textContent = '';
            info.textContent = `It's a Tie`
        } else {
            if (humanChoice == ROCK){
                if (computerChoice == PAPER) {
                    roundInfo.textContent = 'Paper beats Rock';
                    info.textContent = `Computer won this round`;
                    computerScore += 1;
                    computerCounter.textContent = computerScore;
                } else {
                    roundInfo.textContent = 'Rock beats Scissor';
                    info.textContent = `You won this round`;
                    humanScore += 1;
                    playerCounter.textContent = humanScore;
                }
            } else if (humanChoice == PAPER) {
                if (computerChoice == SCISSOR) {
                    roundInfo.textContent = 'Scissor beats Paper';
                    info.textContent = `Computer won this round`;
                    computerScore += 1;
                    computerCounter.textContent = computerScore;
                } else {
                    info.textContent = `You won this round`;
                    humanScore += 1;
                    playerCounter.textContent = humanScore;
                }
            } else if (humanChoice == SCISSOR) {
                if (computerChoice == ROCK) {
                    roundInfo.textContent = 'Rock beats Scissor';
                    info.textContent = `Computer won this round`;
                    computerScore += 1;
                    computerCounter.textContent = computerScore;
                } else {
                    info.textContent = `You won this round`;
                    humanScore += 1;
                    playerCounter.textContent = humanScore;
                }
            }
        }
        checkRound();
    }
        
// }

let checkRound = () => {
        if(humanScore == maxScore) {
            para.textContent = 'You has won'
            modal.style.cssText = 'background-color: rgba(89, 202, 37, 0.384)'
            openModal();
        }else if (computerScore == maxScore) {
            para.textContent = 'Computer has won'
            modal.style.cssText = 'background-color: rgba(202, 62, 37, 0.384)'
            openModal();
        }
    }

const body = document.querySelector('body');
const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalBox = document.createElement('div');
    modalBox.classList.add('modalBox');
    modal.appendChild(modalBox);

    const h2 = document.createElement('h2');
    h2.textContent = 'Game Over';
    modalBox.appendChild(h2);

    const para  = document.createElement('p');
    para.classList.add('gameStatus');
    para.textContent = '"Playerholder"'
    modalBox.appendChild(para);

    const button = document.createElement('button');
    button.textContent = 'Restart Game';
    modalBox.appendChild(button);

    button.addEventListener('click', () => restartGame());


let openModal = () => {
    body.appendChild(modal);
}

let restartGame = () => {
    body.removeChild(modal);
    window.location.reload();
}















