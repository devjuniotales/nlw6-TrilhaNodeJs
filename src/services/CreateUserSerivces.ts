import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from 'bcryptjs'
interface IuserRequest {
    name: string;
    email : string;
    password: string;
    admin ?: boolean;

}


class CreateUserServices {
    async execute({name, email,password , admin = false } : IuserRequest){
        const usersReposirory  =  getCustomRepository(UserRepository);

        if(!email){
            throw new Error('Email incorrect');
        }

        const userAlreadyExists = await usersReposirory.findOne({email});

        if(userAlreadyExists){
            throw new Error('User already exists');
        }

        const passwordHash = await hash(password, 8)

        const user = usersReposirory.create({
            email,
            password : passwordHash,
            name,
            admin
        });

        await usersReposirory.save(user);

        return user;
    }
}

export {  CreateUserServices }