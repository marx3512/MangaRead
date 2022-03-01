import { Response, Request } from "express";
import { CreateChapterPageService } from "../services/CreateChapterPageService";


export class CreateChapterPageController {
    async handle(req: Request, res: Response) {
        const {numberChapter, description} = req.body;
        const {mangaID} = req.params;
        const requestimage = req.files as Express.Multer.File[];
        const numChapter = parseInt(numberChapter);

        const images = requestimage.map(image => {
            return { image: image.filename}
        })

        const service = new CreateChapterPageService();

        const result = await service.execute({numChapter,description,mangaID,images});

        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}