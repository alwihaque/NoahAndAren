import express from 'express';
import config from 'config';
import multer from 'multer';
import dbConnectionHandler from "./Init/dbConnection.js";
import routerHandler from './Init/routes.js';
const MONGO_URI = config.get('connection-config.MONGO_URI');
const PORT = config.get('connection-config.PORT');
const app = express();
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname+ '-'+ Date.now());
    }
});

routerHandler(app);
dbConnectionHandler(MONGO_URI);

app.listen(PORT);


