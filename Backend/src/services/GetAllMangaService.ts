import { getRepository } from "typeorm";
import { Manga } from "../entities/Manga";
import mangaView from "../views/mangaViews";


export class GetAllMangaService {
    async execute() {
        const repo = getRepository(Manga);

        const mangas = await repo.find();

        if(!mangas){
            return new Error("Not manga exist")
        }

        return mangaView.renderMany(mangas);
    }
}