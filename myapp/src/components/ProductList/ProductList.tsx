import React from "react";
import ProductItem from "../ProductItem/ProductItem.tsx";

const ProductData = [
    {
        id: 1,
        title: "Ürün 1",
        image: "https://loremflickr.com/400/400",
        price: 100,
    },
    {
        id: 2,
        title: "Ürün 2",
        image: "https://loremflickr.com/400/400",
        price: 200,
    },
    {
        id: 3,
        title: "Ürün 3",
        image: "https://loremflickr.com/400/400",
        price: 300,
    },
    {
        id: 4,
        title: "Ürün 4",
        image: "https://loremflickr.com/400/400",
        price: 400,
    },
    {
        id: 5,
        title: "Ürün 5",
        image: "https://loremflickr.com/400/400",
        price: 500,
    },
    {
        id: 6,
        title: "Ürün 6",
        image: "https://loremflickr.com/400/400",
        price: 600,
    },
    {
        id: 7,
        title: "Ürün 7",
        image: "https://loremflickr.com/400/400",
        price: 700,
    },
    {
        id: 8,
        title: "Ürün 8",
        image: "https://loremflickr.com/400/400",
        price: 800,
    },
    {
        id: 9,
        title: "Ürün 9",
        image: "https://loremflickr.com/400/400",
        price: 900,
    },
    {
        id: 10,
        title: "Ürün 10",
        image: "https://loremflickr.com/400/400",
        price: 1000,
    },
];

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
