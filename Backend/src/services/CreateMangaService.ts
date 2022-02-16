import { Manga } from "../entities/Manga"
import { getRepository } from "typeorm";

type MangaRequest = {
    name: string,
    image: string,
    description: string,
}

export class CreateMangaService {
    async execute({name, image, description}: MangaRequest): Promise<Manga | Error> {
        const repo = getRepository(Manga);
        
        if(await repo.findOne({name})){
            return new Error("Manga already exists");
        }

        const manga = repo.create({
            name,
            image,
            description,
        })
        
        await repo.save(manga);

        return manga;
    }
}

