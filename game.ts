

const humanScore: number = 0
const computerScore: number = 0


function getComputerChoice(): string {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(): string{}// recibir lo que escribio el jugador y 


function playRound(getHumanChoice(), getComputerChoice()):string{}