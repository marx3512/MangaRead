import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import RegisterManga from "./pages/RegisterManga";
import MangaPage from "./pages/MangaPage";
import ChapterPage from "./pages/ChapterPage";

function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/registermanga" element={<RegisterManga />} />
                <Route path="/mangapage" element={<MangaPage />} />
                <Route path="/chapterpage" element={<ChapterPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routess;