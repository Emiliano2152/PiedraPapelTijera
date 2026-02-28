export type Choice = 'piedra' | 'papel' | 'tijera';

export type RoundResult = {
  result: 'empate' | 'ganaste' | 'perdiste';
  computerChoice: Choice;
};

const CHOICES: Choice[] = ['piedra', 'papel', 'tijera'];

export function isValidChoice(value: unknown): value is Choice {
  return CHOICES.includes(value as Choice);
}

function getComputerChoice(): Choice {
  const index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

export function playRound(humanChoice: Choice): RoundResult {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    return { result: 'empate', computerChoice };
  }

  const humanWins =
    (humanChoice === 'piedra' && computerChoice === 'tijera') ||
    (humanChoice === 'papel' && computerChoice === 'piedra') ||
    (humanChoice === 'tijera' && computerChoice === 'papel');

  return {
    result: humanWins ? 'ganaste' : 'perdiste',
    computerChoice
  };
}