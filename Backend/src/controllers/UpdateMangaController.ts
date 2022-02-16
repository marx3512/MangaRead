import { Request, response, Response } from "express"
import { UpdateMangaService } from "../services/UpdateMangaService";


export class UpdateMangaController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name, description } = req.body;

        const service = new UpdateMangaService();

        const result = await service.execute({ id, name, description});

        if (result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}