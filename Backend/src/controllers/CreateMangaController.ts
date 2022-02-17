import { Request, Response } from "express";
import { CreateMangaService } from "../services/CreateMangaService";

export class CreateMangaController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;
        const requrestImage = request.file;
        const image = requrestImage.filename;

        const service = new CreateMangaService();
        
        const result = await service.execute({name, image, description});
        
        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}