import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { useParams } from "react-router-dom";
import "../styles/pages/chapterPage.css";

type ChapterParams = {
    id: string,
}

interface Page {
    id: string,
    url: string,

}

interface Chapter {
    id: string,
    numberChapter: number
}

function ChapterPage() {
    const params = useParams<ChapterParams>();
    const [pages, setPages] = useState<Page[]>([]);
    const [chapter, setChapter] = useState<Chapter>();

    useEffect(() => {
        api.get(`pages/${params.id}`).then(res => {
            setPages(res.data);
        })
        api.get(`chapter/${params.id}`).then(res => {
            setChapter(res.data);
        })
    }, [params.id])

    return (
        <div id="chapter-page">
            <h1 id="title-chapter">Chapter</h1>
                <div id="pages">
                    {pages.map(page => {
                        return(
                            <img src={page.url} alt="" id="page"/>
                        )
                    })}
                </div>
            <Link id="link-return-page" to="/">Return home</Link>
            
        </div>
    )
}

export default ChapterPage;