import { Response, Request } from 'express'
import { ListTagsServices } from '../services/ListTagsService'

class ListTagsController {
    async handle( req : Request  , res : Response) {
        const listTagsServices = new ListTagsServices();

        const tags = await listTagsServices.execute();

        return res.json(tags);
    }
}

export { ListTagsController }