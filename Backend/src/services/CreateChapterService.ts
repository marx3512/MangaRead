import { getRepository } from "typeorm"
import { Chapter } from "../entities/Chapter"
import { Manga } from "../entities/Manga";

type ChapterRequest = {
    numberChapter: number;
    description: string;
    mangaID: string;
}

export class CreateChapterService {
    async execute({numberChapter, description, mangaID}: ChapterRequest): Promise<Chapter | Error> {
        const repo = getRepository(Chapter);
        const repoManga = getRepository(Manga);
        
        if(!(await repoManga.findOne(mangaID))) return new Error("Manga does note exists");
        
        const chapter = repo.create({ numberChapter,description,mangaID});
        
        await repo.save(chapter);

        return chapter;
    }
}