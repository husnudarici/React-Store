import React from "react";
import { ProductProps } from "../ProductList/types";
import ProductInfo from "./ProductInfo.tsx";

const ProductItem: React.FC<ProductProps> = (props) => {
    const { title, price, image } = props;
    return (
        <div className="col-2 p-3">
            <div className="product-item card">
                <div className="product-item-image">
                    <img className="card-img-top" src={image} alt="" />
                </div>
                <ProductInfo>
                    <div className="product-item-detail-title card-title">
                        {title}
                    </div>
                    <div className="product-item-detail-price card-text">
                        {price} ₺
                    </div>
                </ProductInfo>
            </div>
        </div>
    );
};

export default ProductItem;
