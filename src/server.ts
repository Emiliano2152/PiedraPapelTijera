import express, { Request, Response } from 'express';
import { isValidChoice, play, partida } from './game.js';

const app = express();

app.use(express.json());
app.use(express.static('.'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(express.static('.'));

app.post('/play', (req: Request, res: Response) => {
  const { choice } = req.body;

  if (!isValidChoice(choice)) {
    return res.status(400).json({
      error: 'Debe enviar piedra, papel o tijera',
    });
  }
  try {
    play(choice);
    res.sendStatus(200);
  } catch (error) {
    // 'error' is of type unknown here
    if (error instanceof Error) {
      // Inside this block, 'error' is narrowed to type 'Error'
      console.error('Caught an Error instance:', error.message);
      res.json(error.message);
    } else {
      // Handle cases where something other than an Error object was thrown
      console.error('An unknown error occurred:', error);
      res.json(error);
    }
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

app.get('/view', (req: Request, res: Response) => {
  res.json(partida);
});

app.post('/nueva-partida', (req: Request, res: Response) => {
  throw new Error('No implementado');
});

/*
TODO:
- 
*/
