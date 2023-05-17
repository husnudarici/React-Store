import React, { useContext } from "react";
import HeaderContext from "../../context";

const Slider = () => {
    const { headerHeightContext } = useContext(HeaderContext);
    return <div>Slider, Header height: {headerHeightContext} px</div>;
};

export default Slider;
