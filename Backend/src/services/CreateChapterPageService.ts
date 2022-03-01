import { getRepository } from "typeorm";
import { Chapter } from "../entities/Chapter";
import { Page } from "../entities/Page";
import { Manga } from "../entities/Manga";

type ChapterPageRequest = {
    numChapter: number;
    description: string;
    mangaID: string;
    images: {image: string}[];   
}

export class CreateChapterPageService {
    async execute({numChapter, description, mangaID, images}: ChapterPageRequest){
        const repo = getRepository(Chapter);
        const repoManga = getRepository(Manga);
        const repoPage = getRepository(Page);

        if(!(await repoManga.findOne(mangaID))) return new Error("Manga does not exists");

        const chapter = repo.create({numberChapter: numChapter,description,mangaID});

        await repo.save(chapter);

        if(!(await repo.findOne(chapter.id))) return new Error("Chapter does not exists");
        const chapterID = chapter.id;
        console.log(images);

        for(let i = 0;i < images.length; i++){
            let image = images[i].image;
            let result = repoPage.create({image,chapterID});
            await repoPage.save(result);
        }
        
        return {
            numberChapter: numChapter,
            description: description,
            images: images,
        }
    }
}