import { getRepository } from "typeorm";
import { Page } from "../entities/Page";
import pageView from "../views/pageViews";

type GetAllPageRequest = {
    chapterID: string
}

export class GetAllPageService {
    async execute({chapterID}: GetAllPageRequest){
        const repo = getRepository(Page);

        const page = await repo.find({chapterID});

        if(!page) return new Error("Page does not exist");

        return pageView.renderMany(page);
    }
}