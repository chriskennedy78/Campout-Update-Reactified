import { Container, Row, Col } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";
import ImageCarousel from "../features/carousel/ImageCarousel";
import CabinsList from "../features/cabins/CabinsList";

const HomePage = () => {
    return (
        <Container>
            <SubHeader current="Home" />
            <Row>
                <ImageCarousel />
            </Row>
            <Row>
                <h2>Featured Artist</h2>
                <DisplayList />
            </Row>
        </Container>
    );
};

export default HomePage;
