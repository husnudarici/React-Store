import React from "react";
import ProductForm from "./ProductForm";

const NewProduct = ({ setProducts }) => {
    const onSaveProductData = (productData) => {
        setProducts((prevState) => [productData, ...prevState]);
    };
    return <ProductForm onSaveProductData={onSaveProductData} />;
};

export default NewProduct;
