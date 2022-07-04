import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import "reflect-metadata";

import DataBase from './db/connect';
import logger from './logger/logger';

const app = express();
const PORT = process.env.PORT || '5515';

app.get('/', (req: Request, res: Response) => {
    res.send("Hello test");
});

DataBase.initialize()
    .then(() => {
        logger.info(`[OK] DataBase initialized`);

        app.listen(PORT, () => {
            logger.info(`[OK] Server is running on PORT ${ PORT }`)
        });
    })
    .catch(err => {
        console.log(err);
        logger.error(`[Error] Error started server: ${ err }`)
    })