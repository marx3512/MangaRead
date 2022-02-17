import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";
import { CreateMangaController } from "./controllers/CreateMangaController";
import { GetAllMangaController } from "./controllers/GetAllMangaController";
import { DeleteMangaController } from "./controllers/DeleteMangaController";
import { UpdateMangaController } from "./controllers/UpdateMangaController";
import { CreateChapterController } from "./controllers/CreateChapterController";
import { CreatePageController } from "./controllers/CreatePageController";
import { GetAllChapterController } from "./controllers/GetAllChapterController";
import { GetAllPageController } from "./controllers/GetAllPageController";


const routes = Router();
const upload = multer(uploadConfig)

routes.get("/landpage", new GetAllMangaController().handle);

routes.post("/mangas", upload.single("image"),new CreateMangaController().handle);
routes.put("/mangas/:id", new UpdateMangaController().handle);
routes.delete("/mangas/:id", new DeleteMangaController().handle);

routes.get("/chapters/:mangaID", new GetAllChapterController().handle);
routes.post("/chapters/:mangaID", new CreateChapterController().handlle);

routes.get("/pages/:chapterID", new GetAllPageController().handle);
routes.post("/pages/:chapterID", upload.array("images"),new CreatePageController().handle);

export { routes };