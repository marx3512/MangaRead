import { getRepository } from "typeorm";
import { Manga } from "../entities/Manga";
import mangaView from "../views/mangaViews";

type GetMangaRequest = {
    id: string
}

export class GetMangaService {
    async execute({id}: GetMangaRequest) {
        const repo = getRepository(Manga);

        const manga = await repo.findOne({id})

        if(!manga) return new Error("Manga does not exists!");


        return mangaView.render(manga);
    }
}