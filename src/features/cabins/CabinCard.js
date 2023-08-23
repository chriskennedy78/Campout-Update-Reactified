import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

// this card is deconstructed by listing the keys in the {} and assigning them to the object name.
const CabinCard = ({ cabin }) => {
    const { id, image, name } = cabin;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg height="500px" src={image} alt={name} />

                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
};

export default CabinCard;
