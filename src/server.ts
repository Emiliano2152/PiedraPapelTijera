import express, { Request, Response } from 'express';
import { playRound, isValidChoice } from './game';

const app = express();

app.use(express.json());

app.post('/play', (req: Request, res: Response) => {
  const { choice } = req.body;

  if (!isValidChoice(choice)) {
    return res.status(400).json({
      error: 'Debe enviar piedra, papel o tijera'
    });
  }

  const result = playRound(choice);

  res.json(result);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});