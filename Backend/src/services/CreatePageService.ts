import { getRepository } from "typeorm";
import { Chapter } from "../entities/Chapter";
import { Page } from "../entities/Page";

type PageRequest = {
    image: string;
    chapterID: string;
}

export class CreatePageService {
    async execute({image, chapterID}: PageRequest): Promise<Page | Error> {
        const repo = getRepository(Page);
        const repoChapter = getRepository(Chapter);

        if(!(await repoChapter.findOne(chapterID))) return new Error("Chapter does not exist");

        const page = repo.create({ image, chapterID});

        await repo.save(page);

        return page;
    }
}