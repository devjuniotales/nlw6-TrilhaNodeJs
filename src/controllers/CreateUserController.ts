import {Request, Response} from 'express'
import { CreateUserServices } from '../services/CreateUserSerivces';


class CreateUserController {
    async create(req : Request , res : Response){
        const { name, email, admin ,password } = req.body;

        const createUserServices = new CreateUserServices();

        const user = await createUserServices.execute({email,name,admin, password});

        return res.json(user);
    }
}

export { CreateUserController };