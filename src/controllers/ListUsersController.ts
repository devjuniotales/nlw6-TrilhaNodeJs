import {Request, Response } from 'express'
import { ListUserService } from '../services/ListUserService'

class ListUserController {
    async handle( req : Request , res : Response){

    const listUsersServices = new ListUserService();

    const users = await listUsersServices.execute();

    return res.json(users);

    };


}

export { ListUserController }