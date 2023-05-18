// src/context/GlobalContext.js

import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [newData, setNewData] = useState("");

    return (
        <GlobalContext.Provider
            value={{ headerHeight, setHeaderHeight, newData, setNewData }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
