import { Manga } from "../entities/Manga";

export default {
    render(manga: Manga) {
        return {
            id: manga.id,
            name: manga.name,
            image: manga.image,
            description: manga.description,
            url: `http://localhost:3000/uploads/${manga.image}`
        }
    },

    renderMany(mangas: Manga[]) {
        return mangas.map(manga => this.render(manga));
    }
}