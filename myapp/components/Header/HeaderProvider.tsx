import React from "react";
import HeaderContext from "../../context";

const HeaderProvider = ({ children }) => {
    return (
        <HeaderContext.Provider value={headerHeightContext}>
            {children}
        </HeaderContext.Provider>
    );
};

export default HeaderProvider;
