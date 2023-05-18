import React, { useEffect, useRef, useContext } from "react";
import { GlobalContext } from "../../context/context";

const Header = () => {
    const headerRef = useRef<HTMLDivElement | null>(null);
    const { setHeaderHeight } = useContext(GlobalContext);
    const { setNewData } = useContext(GlobalContext);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [setHeaderHeight]);

    function handleAdd(e) {
        e.preventDefault();
        setNewData("Hüsnü");
    }

    return (
        <div ref={headerRef} className="header">
            Header
            <button onClick={handleAdd}>Yeni Ekle</button>
        </div>
    );
};

export default Header;
