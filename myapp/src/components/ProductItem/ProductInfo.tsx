import React from "react";

const ProductInfo = (props) => {
    return (
        <div className="product-item-detail card-body">
            <span className="product-item-detail-seller">n11.com</span>
            {props.children}
        </div>
    );
};

export default ProductInfo;
