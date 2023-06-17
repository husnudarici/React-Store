import React, { useEffect, useState } from "react";
import { Col, Button, Card } from "react-bootstrap";

import ProductInfo from "./ProductInfo";
import Counter from "./Counter";

const ProductItem = ({ title, price, image, description }) => {
    const [counter, setCounter] = useState(price);
    const [productTitle, setProductTitle] = useState(title);

    useEffect(() => {
        setCounter(price);
    }, [price]);

    const submitHandle = () => {
        setProductTitle("Güncellendi");
    };

    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="p-3">
            <Card className="product-item">
                <Card.Img variant="top" src={image} />
                <ProductInfo>
                    <Card.Title className="product-item-detail-title">
                        {productTitle}
                    </Card.Title>
                    <Card.Text className="product-item-detail-price">
                        {description}
                    </Card.Text>
                    <Counter
                        counter={counter}
                        setCounter={setCounter}
                        padding="0"
                    >
                        {counter} ₺
                    </Counter>
                    <Button
                        variant="primary"
                        className="mt-3"
                        onClick={submitHandle}
                    >
                        Güncelle
                    </Button>
                    <Button
                        variant="danger"
                        onClick={(e) => console.log("sil")}
                    >
                        Sil
                    </Button>
                </ProductInfo>
            </Card>
        </Col>
    );
};

export default ProductItem;
