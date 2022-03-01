import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../services/api";
import "../styles/pages/registerManga.css";

function RegisterManga() {
    const history = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File[]>([]);

    function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
        if(!event.target.files) return;
        
        setImage(Array.from(event.target.files));
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = new FormData();

        data.append("name", name);
        data.append("description", description);
        data.append("image", image[0]);

        await api.post("registermanga", data);
        alert("Success!");
        history("/")
    }

    return (
        <div id="register-manga">
            <h1 id="tittle-manga-register">Register Manga</h1>
            <form onSubmit={handleSubmit} id="forms-manga">
                <label htmlFor="name">Name: </label>
                <input type="text" value={name} onChange={event => setName(event.target.value)}id="input-manga-register"></input>
                <label htmlFor="description" >Description: </label>
                <input type="text" value={description} onChange={event => setDescription(event.target.value)}id="input-manga-description"></input>
                <label htmlFor="image">Cover: </label>
                <input onChange={handleSelectImage} type="file" id="input-manga-register"></input>
                <button type="submit" id="button-manga">Send</button>
            </form>
            <Link to="/" id="link-manga-register">Return home</Link>
        </div>
    )
}

export default RegisterManga;