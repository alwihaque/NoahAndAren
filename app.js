import express from 'express';
import config from 'config';
import dbConnectionHandler from "./Init/dbConnection.js";
import routerHandler from './Init/routes.js';
const MONGO_URI = config.get('connection-config.MONGO_URI');
const PORT = config.get('connection-config.PORT');
const app = express();
routerHandler(app);
dbConnectionHandler(MONGO_URI);

app.listen(PORT);


