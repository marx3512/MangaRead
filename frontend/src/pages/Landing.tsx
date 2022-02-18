import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/landingPage.css";


function Landing() {
    return (
        <div id="page-landing">
            <h1>Hello World</h1>
            <Link to="/mangapage"> Manga</Link>
            <Link to="/registermanga"> Cadastra Manga</Link>
        </div>
    );
}

export default Landing;