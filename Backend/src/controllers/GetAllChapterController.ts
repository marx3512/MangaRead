import { Request, Response } from "express"
import { GetAllChapterService } from "../services/GetAllChapterService"


export class GetAllChapterController {
    async handle(req: Request, res: Response) {
        const { mangaID } = req.params;
        const service = new GetAllChapterService();

        const result = await service.execute({mangaID});

        if (result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}