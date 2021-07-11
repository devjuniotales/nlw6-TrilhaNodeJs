import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import 'express-async-errors'

import {router} from './routes';

import './database/index'

const app = express();

app.use(express.json());

app.use(router);

// middlware trativa de erro//
app.use((err : Error , request : Request , response : Response , next : NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error : err.message
        })
    }
    return response.status(500).json({
        status : "error",
        message : "Internal Server Error"
    })
})


app.listen(3333,() => console.log('Server is running!!!'));