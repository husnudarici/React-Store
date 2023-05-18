import React, { useEffect, useRef, useContext } from "react";
import { GlobalContext } from "../../context/context";

const Header = () => {
    const headerRef = useRef<HTMLDivElement | null>(null);
    const { setHeaderHeight, setNewData } = useContext(GlobalContext);

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
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <h1>LOGO</h1>
                    </div>
                    <div className="col-auto">
                        <button onClick={handleAdd}>Yeni Ekle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
