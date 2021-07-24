import express from 'express';
import dbConnectionHandler from "./Init/dbConnection.js";
import routerHandler from './Init/routes.js';
const MONGO_URI = "mongodb+srv://alwihaque:alwi1234@cluster0.meimk.mongodb.net/testDB?retryWrites=true&w=majority";
const app = express();
routerHandler(app);
dbConnectionHandler(MONGO_URI);

app.listen(process.env.port || 3000);


