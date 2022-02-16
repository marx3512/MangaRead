import { getRepository } from "typeorm";
import { Manga } from "../entities/Manga";



export class GetAllMangaService {
    async execute() {
        const repo = getRepository(Manga);

        const mangas = await repo.find();

        if(!mangas){
            return new Error("Not manga exist")
        }

        return mangas;
    }
}