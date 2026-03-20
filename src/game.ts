export type Choice = 'piedra' | 'papel' | 'tijera';

export type RoundResult = {
  result: 'empate' | 'ganaste' | 'perdiste';
  computerChoice: Choice;
};

export let partida: RoundResult[] = [];

const CHOICES: Choice[] = ['piedra', 'papel', 'tijera'];

export function isValidChoice(value: unknown): value is Choice {
  return CHOICES.includes(value as Choice);
}

function getComputerChoice(): Choice {
  const index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

export type PartidaResult = 'Ganaste' | 'Perdiste' | 'Juego en curso';

export function play(humanChoice: Choice): void {
  // Validamos que todavía no se haya terminado la partid
  if (partida.filter((ronda) => ronda.result == 'ganaste').length === 3) {
    throw new Error('Ya ganaste');
  }

  if (partida.filter((ronda) => ronda.result == 'perdiste').length === 3) {
    throw new Error('A llorar a la iglesia');
  }

  // Jugamos la ronda, la guardamos con nombre `i`
  let i = playRound(humanChoice);
  //aca se guarda el resultado de la partida en el array de partidas
  partida.push(i);
  // chequeamos el estado actual de la partida completa. Ganaste, perdiste, o sigue el juego
  // endGame(partida);
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

  let ronda: RoundResult = {
    result: humanWins ? 'ganaste' : 'perdiste',
    computerChoice,
  };
  return ronda;
}

/*function endGame(rondas: RoundResult[]): void {
  if (rondas.filter((ronda) => ronda.result == 'ganaste').length === 3) {
    rondas.length = 0;
  }

  if (rondas.filter((ronda) => ronda.result == 'perdiste').length === 3) {
    rondas.length = 0;
  }
}*/
