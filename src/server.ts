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

  const result = play(choice);

  res.json(result);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

app.get('/view', (req: Request, res: Response) => {
  res.json(partida);
});
