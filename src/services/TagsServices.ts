import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepository"

class CreateTagsServices {
    async execute( name : string ) {

        const tagRespositories = getCustomRepository(TagsRepositories)
        
        if(!name){
            throw new Error('Name incorrect!')
        }

        const tagAlreadyExists = await tagRespositories.findOne({
            name
        });

        if(tagAlreadyExists){
            throw new Error('Tag Already Exists!')
        }
        const tag = tagRespositories.create({
            name
        });

        await tagRespositories.save(tag);

        return tag;
    }
}

export { CreateTagsServices }