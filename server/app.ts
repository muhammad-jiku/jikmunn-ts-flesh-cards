import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';
import { deckRoute } from './routes/deckRoute';

export const app = express();

app.use(cors());
// app.use(
//   cors({
//     origin: '*',
//   })
// );
app.use(express.json());
// app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.disable('x-powered-by'); // less hackers know about our stack

//  displaying welcome message
app.get('/', (req, res) => {
  res.send({
    message: 'Welcome here!',
  });
});

app.use('/api/v1', deckRoute);
