import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../container/home/home";


function AppRouter() {
    return (
        <div className="App">
            <h1>home</h1>
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
        </div>
    );
}
export default AppRouter;