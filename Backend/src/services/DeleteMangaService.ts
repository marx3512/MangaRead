import { getRepository } from "typeorm";
import { Manga } from "../entities/Manga";



export class DeleteMangaService {
    async execute(id: string) {
        const repo = getRepository(Manga);

        if(!await repo.findOne(id)){
            return new Error("Manga does not exists");
        }

        await repo.delete(id);
    }
}