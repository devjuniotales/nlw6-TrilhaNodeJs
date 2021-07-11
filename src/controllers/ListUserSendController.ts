import {Request, Response} from 'express'
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsReceive'


class ListUserSendComplimentsController {
    async handle(req : Request, res : Response ){
        const { user_id } = req
        
        const listuserSendComlimentsSerives = new ListUserSendComplimentsService();

        const compliments = await listuserSendComlimentsSerives.execute(user_id)

        return res.json(compliments);
    }
}
export { ListUserSendComplimentsController }