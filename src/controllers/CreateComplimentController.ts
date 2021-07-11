import { Request , Response} from 'express'
import { CreateComplimentServices } from '../services/CreateComplimentService'


class CreateComplimentController {
    async create (req: Request , res : Response){
    const { user_id }  =req;
    const { tag_id , user_receiver ,message } = req.body;

    const createComplimentServices = new CreateComplimentServices() 
    
    const compliment  = await createComplimentServices.create({
        tag_id,
        user_receiver,
        user_sender : user_id,
        message
    })
    return res.json(compliment);

    }
}

export {  CreateComplimentController }