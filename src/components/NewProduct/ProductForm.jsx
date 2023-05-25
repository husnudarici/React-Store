import React, { useState } from "react";
import { Col, Form, Row, Button, InputGroup } from "react-bootstrap";

const ProductForm = ({ onSaveProductData }) => {
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        image: "",
        description: "",
    });

    const { title, price, image, description } = newProduct;

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        if (form.checkValidity()) {
            event.preventDefault();

            onSaveProductData(newProduct);

            setNewProduct({
                title: "",
                price: "",
                image: "",
                description: "",
            });

            setValidated(false);
        }
    };

    return (
        <div className="product-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="title">
                        <Form.Label>Ürün Adı</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ürünün adını giriniz..."
                            value={title}
                            onChange={(e) =>
                                setNewProduct((prevState) => {
                                    return {
                                        ...prevState,
                                        title: e.target.value,
                                    };
                                })
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            Ürünün adını giriniz.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="price">
                        <Form.Label>Ürünün Fiyatı</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">
                                ₺
                            </InputGroup.Text>
                            <Form.Control
                                type="number"
                                placeholder="100, 150, 200..."
                                aria-describedby="inputGroupPrepend"
                                required
                                value={price}
                                onChange={(e) =>
                                    setNewProduct((prevState) => {
                                        return {
                                            ...prevState,
                                            price: e.target.value,
                                        };
                                    })
                                }
                            />
                            <InputGroup.Text>.00</InputGroup.Text>
                            <Form.Control.Feedback type="invalid">
                                Ürünün fiyatını giriniz.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="image">
                        <Form.Label>Görsel</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Görsel URL'sini giriniz..."
                            required
                            value={image}
                            onChange={(e) =>
                                setNewProduct((prevState) => {
                                    return {
                                        ...prevState,
                                        image: e.target.value,
                                    };
                                })
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            Lütfen bir görsel URL'si giriniz.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="description">
                        <Form.Label>Açıklama</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Ürünün açıklamasını giriniz..."
                            required
                            style={{ height: "100px" }}
                            value={description}
                            onChange={(e) =>
                                setNewProduct((prevState) => {
                                    return {
                                        ...prevState,
                                        description: e.target.value,
                                    };
                                })
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            Lütfen bir açıklama giriniz.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Ürün Ekle</Button>
            </Form>
        </div>
    );
};

export default ProductForm;
