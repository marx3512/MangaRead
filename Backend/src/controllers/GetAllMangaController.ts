import { Request, Response } from "express";
import { GetAllMangaService } from "../services/GetAllMangaService";

export class GetAllMangaController {
    async handle(req: Request, res: Response) {
        
        const service = new GetAllMangaService();

        const result = await service.execute();

        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}