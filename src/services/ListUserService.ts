import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"
import { classToPlain} from 'class-transformer'

class ListUserService {
    async execute() {
        const userRespositories = getCustomRepository(UserRepository);

        const users = await userRespositories.find();

        return classToPlain(users);
    }

}

export { ListUserService}