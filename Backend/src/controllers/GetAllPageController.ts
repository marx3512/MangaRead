import { Request, Response } from "express";
import { GetAllPageService } from "../services/GetAllPageService";

export class GetAllPageController {
    async handle(req: Request, res: Response) {
        const { chapterID } = req.params;
        const service = new GetAllPageService();

        const result = await service.execute({chapterID});

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}