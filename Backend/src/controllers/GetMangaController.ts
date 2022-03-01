import { Request, Response } from "express";
import { GetMangaService } from "../services/GetMangaService";

export class GetMangaController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const service = new GetMangaService()

        const result = await service.execute({id});

        if( result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}