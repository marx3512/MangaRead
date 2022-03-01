import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { useParams } from "react-router-dom";
import "../styles/pages/MangaPage.css";

interface Chapter {
    id: string,
    numberChapter: number
}

interface Manga {
    id: string,
    name: string,
    url: string,
    description: string,
}

type MangaParams = {
    id: string;
}

function MangaPage() {
    const params = useParams<MangaParams>();
    const [chapters, setChapters] = useState<Chapter[]>([])
    const [manga,setManga] = useState<Manga>();

    useEffect(() => {
        api.get(`manga/${params.id}`).then(res => {
            setManga(res.data);
        })
        api.get(`chapters/${params.id}`).then(res => {
            setChapters(res.data);
        })
    }, [params.id])
    return (
        <div id="manga-page">
            <h1 id="title-manga">{manga?.name}</h1>
            <img id="img"src={manga?.url} alt=""/>

            <p>{manga?.description}</p>
            <ul id="show-cap">
                {chapters.map(chapter => {
                    return(
                        <li>
                            <Link to={`/chapterpage/${chapter.id}`} id="link">
                                <h3>Chapter {chapter.numberChapter}</h3>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Link to="/" id="link-manga-page-home"> Return home</Link>
            <Link to={`/registerchapter/${manga?.id}`} id="link-manga-page-register">Register chapter</Link>
        </div>
    )
}

export default MangaPage;