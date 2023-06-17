import React from "react";

import ProductForm from "./ProductForm";

const NewProduct = ({ onAdd, products }) => {
    return <ProductForm onSaveProductData={onAdd} products={products} />;
};

export default NewProduct;
