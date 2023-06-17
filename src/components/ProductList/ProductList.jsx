import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/context";
import { Container, Row } from "react-bootstrap";

import ProductItem from "../ProductItem/ProductItem";
import NewProduct from "../NewProduct/NewProduct";

// import { ProductData } from "../../ProductData";

const ProductList = () => {
    const { isAdd } = useContext(GlobalContext);
    const [products, setProducts] = useState([]);

    const handleAddProduct = (data) => {
        setProducts((prevState) => [data, ...prevState]);
    };

    return (
        <div className="products">
            <Container>
                {isAdd ? (
                    <NewProduct onAdd={handleAddProduct} products={products} />
                ) : null}
                <Row className="my-3">
                    <h1>PRODUCTS</h1>
                </Row>
                <Row>
                    {products.length === 0 ? (
                        <p>Ürün bulunamadı...</p>
                    ) : (
                        products.map((product) => (
                            <ProductItem key={product.id} {...product} />
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default ProductList;
