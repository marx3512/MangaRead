import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import RegisterManga from "./pages/RegisterManga";

function Routes() {
    return (
        <BrowserRouter>
            <Route element={<Landing />}  path="/"  />
            <Route element={<RegisterManga />}  path="/registermanga"  />
        </BrowserRouter>
    )
}

export default Routes;