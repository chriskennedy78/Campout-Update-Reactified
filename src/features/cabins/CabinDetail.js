import {
    Card,
    CardImg,
    CardText,
    CardBody,
    Col,
    Row,
    CardHeader,
} from "reactstrap";

const CabinDetail = ({ cabin }) => {
    const { image, name, description, sleepingArrangements } = cabin;

    return (
        <Row>
            <Col md="5" className="m-1">
                <Card>
                    <CardImg top src={image} alt={name} />
                </Card>
            </Col>
            <Col>
                <Card>
                    <CardHeader className="bg-primary text-white">
                        <h3>{sleepingArrangements}</h3>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            <Row>{description}</Row>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default CabinDetail;
