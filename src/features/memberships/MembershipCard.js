import { Card, CardBody, CardTitle, Row } from "reactstrap";

// this card is deconstructed by listing the keys in the {} and assigning them to the object name.
const MembershipCard = ({ membership }) => {
    const { name, price, description } = membership;
    return (
        <Row>
            <Card>
                <CardTitle>{name}</CardTitle>

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

export default MembershipCard;
