import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepository"
import { UserRepository } from "../repositories/UserRepository"

interface ICompliments {
    tag_id : string;
    user_sender : string;
    user_receiver : string;
    message: string;
}

class CreateComplimentServices {
    async create ({tag_id,user_receiver,user_sender,message}: ICompliments ){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const usersRepositories = getCustomRepository(UserRepository);

        if(user_receiver === user_sender){
            throw new Error("Incorrect User Receiver")
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver)

        if(!userReceiverExists) {
            throw new Error("User Receiver does not exists")
        }

        const compliments = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })
        await complimentsRepositories.save(compliments);

        return compliments;


    }
}

export { CreateComplimentServices }