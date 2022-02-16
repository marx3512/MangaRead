import { Request, Response } from "express";
import { CreatePageService } from "../services/CreatePageService";


export class CreatePageController {
    async handle(req: Request, res: Response) {
        const { image, chapterID} = req.body;

        const service = new CreatePageService();

        const result = await service.execute({image, chapterID});

        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}