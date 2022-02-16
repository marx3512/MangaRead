import { Router } from "express";
import { CreateMangaController } from "./controllers/CreateMangaController";
import { GetAllMangaController } from "./controllers/GetAllMangaController";
import { DeleteMangaController } from "./controllers/DeleteMangaController";
import { UpdateMangaController } from "./controllers/UpdateMangaController";
import { CreateChapterController } from "./controllers/CreateChapterController";
import { CreatePageController } from "./controllers/CreatePageController";
import { GetAllChapterController } from "./controllers/GetAllChapterController";
import { GetAllPageController } from "./controllers/GetAllPageController";


const routes = Router();

routes.get("/landpage", new GetAllMangaController().handle);
routes.post("/mangas", new CreateMangaController().handle);
routes.put("/mangas/:id", new UpdateMangaController().handle);
routes.delete("/mangas/:id", new DeleteMangaController().handle);

routes.get("/chapters/:mangaID", new GetAllChapterController().handle);
routes.post("/chapters", new CreateChapterController().handlle);

routes.get("/pages/:chapterID", new GetAllPageController().handle);
routes.post("/pages", new CreatePageController().handle);

export { routes };