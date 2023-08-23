import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
// import { selectFeaturedCabin } from "../cabins/cabinsSlice";
// import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedArtist } from "../artists/artistsSlice";

const DisplayList = () => {
    const items = [
        // selectFeaturedCabin(),
        // selectFeaturedPromotion(),
        selectFeaturedArtist(),
    ];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className="m-1" key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;
