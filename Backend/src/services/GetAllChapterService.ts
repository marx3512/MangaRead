import { getRepository } from "typeorm";
import { Chapter } from "../entities/Chapter";

type GetAllChapterRequest = {
    mangaID: string;
}

export class GetAllChapterService {
    async execute({mangaID}: GetAllChapterRequest) {
        const repo = getRepository(Chapter);

        const chapter = await repo.find({mangaID});

        if(!chapter) return new Error("Chapter does not exist");

        return chapter;
    }
}