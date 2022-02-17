import { Response, Request } from "express";
import { CreateChapterService } from "../services/CreateChapterService";


export class CreateChapterController {
    async handlle(req: Request, res: Response) {
        const { numberChapter, description} = req.body;
        const { mangaID } = req.params;
        
        const service = new CreateChapterService();
        
        const result = await service.execute({numberChapter, description, mangaID});

        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}