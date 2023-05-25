import { createContext, useState } from "react";

const theme = {
    colors: {
        primary: {
            50: "#f2f5ff",
            100: "#d9e2ff",
            200: "#a6c1ff",
            300: "#598bff",
            400: "#3366ff",
            500: "#0039e6",
        },
    },
    neutrals: {
        dark: {
            0: "#000000",
            50: "#0d0d0d",
            100: "#1a1a1a",
            200: "#262626",
            300: "#333333",
            400: "#404040",
            500: "#4d4d4d",
            600: "#595959",
            700: "#666666",
            800: "#737373",
            900: "#808080",
        },
        light: {
            0: "#ffffff",
            50: "#f2f2f2",
            100: "#e6e6e6",
            200: "#d9d9d9",
            300: "#cccccc",
            400: "#bfbfbf",
            500: "#b3b3b3",
            600: "#a6a6a6",
            700: "#999999",
            800: "#8c8c8c",
            900: "#808080",
        },
    },
};

export const ThemeContext = createContext(theme);
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [newData, setNewData] = useState("");

    return (
        <GlobalContext.Provider
            value={{ headerHeight, setHeaderHeight, newData, setNewData }}
        >
            <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>
        </GlobalContext.Provider>
    );
};
