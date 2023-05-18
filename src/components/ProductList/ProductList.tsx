import React from "react";
import ProductItem from "../ProductItem/ProductItem.tsx";
import { ProductData } from "../../ProductData.js";

const ProductList = () => {
    return (
        <div className="products">
            <div className="container">
                <div className="row">
                    <h1>PRODUCTS</h1>
                </div>
                <div className="row">
                    {ProductData.map((product, index) => (
                        <ProductItem key={index} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
