import { Card, CardImg, CardText, CardBody, Col, Row } from "reactstrap";

const CabinDetail = ({ cabin }) => {
    const { image, name, description, accommodations } = cabin;

    return (
        <Row>
            <Col md="5" className="m-1">
                <Card>
                    <CardImg top src={image} alt={name} />
                </Card>
            </Col>
            <Col>
                <Card>
                    <CardBody>
                        <CardText>
                            <h3>{accommodations}</h3>
                            {description}
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default CabinDetail;
