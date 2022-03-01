import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import RegisterManga from "./pages/RegisterManga";
import MangaPage from "./pages/MangaPage";
import ChapterPage from "./pages/ChapterPage";
import RegisterChapterPage from "./pages/RegisterChapterPage";

function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/registermanga" element={<RegisterManga />} />
                <Route path="/chapters/:id" element={<MangaPage />} />
                <Route path="/chapterpage/:id" element={<ChapterPage />} />
                <Route path="/registerchapter/:id" element={<RegisterChapterPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routess;