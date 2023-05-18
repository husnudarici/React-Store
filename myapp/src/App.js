// src/App.tsx

import "./App.css";
import React from "react";
import { GlobalProvider } from "./context/context";

import Header from "./components/Header/Header.tsx";
import Slider from "./components/Slider/Slider.tsx";

function App() {
    return (
        <GlobalProvider>
            <Header />
            <Slider />
        </GlobalProvider>
    );
}

export default App;
