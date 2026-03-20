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

export function play(humanChoice: Choice): PartidaResult {
  // Jugamos la ronda, la guardamos con nombre `i`
  let i = playRound(humanChoice);
  //aca se guarda el resultado de la partida en el array de partidas
  partida.push(i);
  // chequeamos el estado actual de la partida completa. Ganaste, perdiste, o sigue el juego
  const xxx = endGame(partida);
  return xxx;
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

function endGame(rondas: RoundResult[]): PartidaResult {
  if (rondas.filter((ronda) => ronda.result == 'ganaste').length === 3) {
    rondas.length = 0;

    return 'Ganaste';
  }

  if (rondas.filter((ronda) => ronda.result == 'perdiste').length === 3) {
    rondas.length = 0;
    return 'Perdiste';
  }
  // red de seguridad
  return 'Juego en curso';
}

// Command -> cosas que tienen efecto y hacen modificaciones
// Query -> cosas de lectura que no tienen efecto
// R
// Segregation
