import { getRepository } from "typeorm";
import { Manga } from "../entities/Manga";

type MangaUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateMangaService {
    async execute({id, name, description}: MangaUpdateRequest) {
        const repo = getRepository(Manga);

        const manga = await repo.findOne(id);

        if(!manga) return new Error("Manga does not exists");

        manga.name = name ? name : manga.name;
        manga.description = description ? description : manga.description;

        await repo.save(manga);

        return manga;
    }
}