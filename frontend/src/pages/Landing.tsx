import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/landingPage.css";
import "../styles/global.css"
import api from "../services/api";

interface Manga {
        id: string,
        name: string,
        url: string,
        description: string,
    }

function Landing() {
    const [mangas, setMangas] = useState<Manga[]>([]);

    useEffect(() => {
        api.get("landpage").then(res => {
            setMangas(res.data);
        })
    }, []);

    return (
        <div id="page-landing">
            <h1 id="title-land">Manga reader</h1>
                    <ul id ="show-mangas">
                        {mangas.map(manga => {
                            return(
                                <li id="manga">
                                    <h3>{manga.name}</h3>
                                    <Link to={`/chapters/${manga.id}`}>  
                                        <img id="img"src={manga.url} alt="" />
                                    </Link>
                                </li>
                            )
                        })}
                         
                    </ul>
            <Link to="/registermanga" id="link-home"> Cadastra Manga</Link>
        </div>
    );
}

export default Landing;