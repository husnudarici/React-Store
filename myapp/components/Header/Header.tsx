import React, { useContext, useEffect, useRef, useState } from "react";
import HeaderContext from "../../context";

const Header = () => {
    const headerRef = useRef<HTMLDivElement | null>(null);
    const headerHeightContext = useContext(HeaderContext);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
            console.log(setHeaderHeight);
        }
    }, []);

    return (
        <div ref={headerRef} className="header">
            Header {headerHeight} px
        </div>
    );
};

export default Header;
