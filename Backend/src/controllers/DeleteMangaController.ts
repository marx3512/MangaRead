import { Request, Response } from "express";
import { DeleteMangaService } from "../services/DeleteMangaService";


export class DeleteMangaController {
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const service = new DeleteMangaService();

        const result =  await service.execute(id);

        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.status(204).end();
    }
}