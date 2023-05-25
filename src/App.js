import React, { useContext, useState } from "react";
import { GlobalProvider, ThemeContext } from "./context/context";

import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Counter from "./components/ProductItem/Counter";

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
    const [counter, setCounter] = useState(0);
    return (
        <React.StrictMode>
            <GlobalProvider>
                <ColorPalette />
                <Header />
                <ProductList />
                <Counter counter={counter} setCounter={setCounter}>
                    {counter}
                </Counter>
            </GlobalProvider>
        </React.StrictMode>
    );
};

export default App;
