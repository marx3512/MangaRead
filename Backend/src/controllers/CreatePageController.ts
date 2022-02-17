import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Chapter } from "../entities/Chapter";
import { Page } from "../entities/Page";
import { CreatePageService } from "../services/CreatePageService";


export class CreatePageController {
    async handle(req: Request, res: Response) {
        const requestimage = req.files as Express.Multer.File[];
        const { chapterID } = req.params;

        const images = requestimage.map(image => {
            return { image: image.filename }
        })
        
        const service = new CreatePageService().execute({images,chapterID});

        return res.json(service);
    }
}