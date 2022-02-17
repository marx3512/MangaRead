import { getRepository } from "typeorm";
import { Chapter } from "../entities/Chapter";
import { Page } from "../entities/Page";

type PageRequest = {
    images: {image: string }[];
    chapterID: string;
}

export class CreatePageService {
    async execute({images, chapterID}: PageRequest): Promise<Object | Error> {
        const repo = getRepository(Page);
        const repoChapter = getRepository(Chapter);
        
        if(!(await repoChapter.findOne(chapterID))) return new Error("Chapter does not exist");
        
        for(let i = 0;i < images.length; i++){
            let image = images[i].image;
            let result = repo.create({image,chapterID});
            await repo.save(result);
        }

        

        return {message: "Succes"};
    }
}