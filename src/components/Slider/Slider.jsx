import React, { useContext } from "react";
import { GlobalContext } from "../../context/context";

const Slider = () => {
    const { headerHeight } = useContext(GlobalContext);

    return (
        <div style={{ marginTop: headerHeight }}>Added new data: {newData}</div>
    );
};

export default Slider;
