import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/chapterPage.css";


function ChapterPage() {
    return (
        <div id="chapter-page">
            <h1>Chapter</h1>
            <Link to="/">Return home</Link>
            <Link to="/mangapage">Return manga</Link>
        </div>
    )
}

export default ChapterPage;