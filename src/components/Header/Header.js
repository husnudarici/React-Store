import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../context/context";
import { Container, Col, Row, Button } from "react-bootstrap";

const Header = () => {
    const { setHeaderHeight, setNewData } = useContext(GlobalContext);
    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [setHeaderHeight, headerRef]);

    function handleAdd(e) {
        e.preventDefault();
        setNewData("Hüsnü");
    }

    return (
        <div ref={headerRef} className="header">
            <Container>
                <Row className="row align-items-center justify-content-between">
                    <Col sm="auto" md="auto" lg="auto" xl="auto">
                        <h1>LOGO</h1>
                    </Col>
                    <Col sm="auto" md="auto" lg="auto" xl="auto">
                        <Button variant="primary" onClick={handleAdd}>
                            Sepetim
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
