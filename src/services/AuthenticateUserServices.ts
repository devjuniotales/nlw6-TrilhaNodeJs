import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface IAuthenticateRequest {
    email : string;
    password: string;
}

class AuthenticateUserServices {
    async auth({email , password} : IAuthenticateRequest){

    const userRepositories = getCustomRepository(UserRepository)    


    const user = await userRepositories.findOne({
        email
    });

    if(!user){
         throw Error ('Email/Password incorrect!!')
    }   

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch)
        throw Error ('Email/Password incorrect!!')
        
        const token = sign({
            email : user.email
        },"9bbe2d4423a31ba73be864b45b80a367",{
            subject : user.id,
            expiresIn : "1d"
        })

    return token;
    }
}

export { AuthenticateUserServices }