import "./App.css";
import React from "react";

import Header from "./components/Header/Header.tsx";
import Slider from "./components/Slider/Slider.tsx";
import HeaderProvider from "./components/Header/HeaderProvider.tsx";

function App() {
    return (
        <HeaderProvider>
            <Header />
            <Slider />
        </HeaderProvider>
    );
}

export default App;
