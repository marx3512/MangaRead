import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/MangaPage.css";

function MangaPage() {
    return (
        <div id="manga-page">
            <h1>Manga page</h1>
            <Link to="/"> Return home</Link>
            <Link to="/chapterpage">Go to pages</Link>
        </div>
    )
}

export default MangaPage;