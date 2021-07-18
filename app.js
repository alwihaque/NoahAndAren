import express from 'express';
import helmet from "helmet";
import authRouter from './Routes/auth.js';

const app = express();
app.use(helmet());
app.use(authRouter);

app.listen(process.env.port || 3000);


