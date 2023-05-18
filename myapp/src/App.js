import React, { useContext } from "react";
import { GlobalProvider, ThemeContext } from "./context/context";

import Header from "./components/Header/Header.tsx";
import ProductList from "./components/ProductList/ProductList.tsx";

import "./styles/main.scss";

const ColorPalette = () => {
    const { colors, neutrals } = useContext(ThemeContext);

    const getcss = (name, tones) => {
        const entries = Object.entries(tones);

        return entries
            .map(([key, value]) => {
                if (name.length === 2) {
                    return `--${name}${key}: ${value};
                    --${name}${key}-RGB: ${value.replace(/rgb|\(|\)/gm, "")};`;
                }

                return `--${name}${key}: ${value};`;
            })
            .join("");
    };

    return (
        <style type="text/css">{`:root {${[
            getcss("DN", neutrals.dark),
            getcss("LN", neutrals.light),
            getcss("PC", colors.primary),
        ].join("")}}`}</style>
    );
};

const App = () => {
    return (
        <React.StrictMode>
            <GlobalProvider>
                <ColorPalette />
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto p-3">
                            <h1>Navigation</h1>
                        </div>
                        <div className="col p-3">
                            <ProductList />
                        </div>
                        <div className="col-auto p-3">
                            <h1>BASKET</h1>
                        </div>
                    </div>
                </div>
            </GlobalProvider>
        </React.StrictMode>
    );
};

export default App;
