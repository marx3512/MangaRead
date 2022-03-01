import React, { useState, FormEvent, ChangeEvent, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../services/api";
import "../styles/pages/registerChapterPage.css";

interface Manga {
    id: string,
    name: string,
    url: string,
    description: string,
}

type MangaParams = {
    id: string;
}

function RegisterChapter() {
    const history = useNavigate();

    const params = useParams<MangaParams>();
    const [numberChapter, setNumberChapter] = useState("");
    const [description, setDescription] = useState("");
    const [images,setImage] = useState<File[]>([]);
    const [manga,setManga] = useState<Manga>();

    useEffect(() => {
        api.get(`manga/${params.id}`).then(res => {
            setManga(res.data);
        })
    }, [params.id])

    function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
        if(!event.target.files) return;

        setImage(Array.from(event.target.files));
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = new FormData();

        data.append("numberChapter", numberChapter);
        data.append("description", description);
        images.forEach(image => {
            data.append("images", image);
        })

        await api.post(`registerchapter/${manga?.id}`, data);
        alert("Success!");
        history("/");
    }

    return(
        <div id="register-chapter-page">
            <h1 id="tittle-register-chapter">Register Chapter</h1>
            <form onSubmit={handleSubmit} id="forms-chapter">
                <label htmlFor="numberChapter" id="label-chapter-register">Number chapter: </label>
                <input type="number" value={numberChapter} onChange={event => setNumberChapter(event.target.value)} id="input-chapter-register"/>
                <label htmlFor="description" id="label-chapter-register">Description: </label>
                <input type="text" value={description} onChange={event => setDescription(event.target.value)} id="input-chapter-description"/>
                <label htmlFor="images" id="label-chapter-register">Pages: </label>
                <input multiple onChange={handleSelectImage} type="file" id="input-chapter-register"/>
                <button type="submit">Send</button>
            </form>
            <Link to="/" id="link-chapter-register">Return home</Link>
        </div>
    )
}

export default RegisterChapter;