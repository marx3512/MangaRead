import { Page } from "../entities/Page";

export default {
    render(page: Page) {
        return {
            id: page.id,
            url: `http://localhost:3000/uploads/${page.image}`
        }
    },

    renderMany(pages: Page[]) {
        return pages.map(manga => this.render(manga));
    }
}