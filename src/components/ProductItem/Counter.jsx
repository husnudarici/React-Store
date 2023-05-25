import { Container, Row, Button, Col } from "react-bootstrap";

const Counter = (props) => {
    const { counter, setCounter, children, padding } = props;

    return (
        <div className="Counter">
            <Container>
                <Row className="justify-content-center">
                    <Col className={`p-${padding}`}>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                                setCounter(counter + 1);
                            }}
                        >
                            +1
                        </Button>
                        <span>{children}</span>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                                setCounter(counter - 1);
                            }}
                        >
                            -1
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Counter;
