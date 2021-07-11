import {Request , Response  } from 'express' 
import { CreateTagsServices } from '../services/TagsServices';

class CreateTagController {

    async create(req:Request ,res: Response ) {
    const { name } = req.body;

    const createTagServices = new CreateTagsServices();

    const tag = await createTagServices.execute(name);

    return res.json(tag);
    
    }
}

export { CreateTagController };