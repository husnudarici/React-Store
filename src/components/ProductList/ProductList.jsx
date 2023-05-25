import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

import ProductItem from "../ProductItem/ProductItem";
import NewProduct from "../NewProduct/NewProduct";

import { ProductData } from "../../ProductData";

const ProductList = () => {
    const [products, setProducts] = useState(ProductData);
    console.log(products);
    return (
        <div className="products">
            <Container>
                <NewProduct setProducts={setProducts} />
                <Row>
                    <h1>PRODUCTS</h1>
                </Row>
                <Row>
                    {products.map((product, index) => (
                        <ProductItem key={index} {...product} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductList;
