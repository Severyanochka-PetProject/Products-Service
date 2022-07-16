import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import "reflect-metadata";
import cors from 'cors';

import DataBase from './db/connect';
import logger from './logger/logger';
import router from './routes/index';

const app = express();
const PORT = process.env.PORT || '5515';

DataBase.initialize()
    .then(() => {
        logger.info(`[OK] DataBase initialized`);

        app.use(cors({
            origin: [
                'http://localhost:3000',
                'https://localhost:3000',
                'https://tankistpro-food.ru',
                'https://www.tankistpro-food.ru',
              ],
              credentials: true,
        }))

        app.use(express.json());
        app.use('/product-apiV1', router);

        app.listen(PORT, () => {
            logger.info(`[OK] Server is running on PORT ${ PORT }`)
        });
    })
    .catch(err => {
        console.log(err);
        logger.error(`[Error] Error started server: ${ err }`)
    })