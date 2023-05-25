import React from "react";
import { Card } from "react-bootstrap";

const ProductInfo = (props) => {
    return (
        <Card.Body>
            <span className="product-item-detail-seller">n11.com</span>
            {props.children}
        </Card.Body>
    );
};

export default ProductInfo;
