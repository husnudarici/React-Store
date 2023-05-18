import React from "react";
import { GlobalProvider } from "./context/context";

import Header from "./components/Header/Header.tsx";
import ProductList from "./components/ProductList/ProductList.tsx";

import "./styles/main.css";

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-auto">
                        <h1>Navigation</h1>
                    </div>
                    <div className="col">
                        <ProductList />
                    </div>
                    <div className="col-auto">
                        <h1>BASKET</h1>
                    </div>
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
