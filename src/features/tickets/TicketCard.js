import { Card, CardBody, CardHeader, CardTitle, Row } from "reactstrap";

// this card is deconstructed by listing the keys in the {} and assigning them to the object name.
const TicketCard = ({ ticket }) => {
    const { type, price, tagline, description } = ticket;
    return (
        <Row>
            <Card>
                <CardTitle>{type}</CardTitle>
                <CardHeader>{tagline}</CardHeader>
                <CardBody>
                    {description}
                    <br />
                    <br />
                    Price: {price}
                </CardBody>
            </Card>
        </Row>
    );
};

export default TicketCard;
