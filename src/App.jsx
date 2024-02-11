// App.jsx

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Wrapper from "./components/Wrapper";

const App = () => {
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Wrapper />} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;