import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";
import ImageCarousel from "../features/carousel/ImageCarousel";

const HomePage = () => {
    return (
        <Container>
            <SubHeader current="Home" />
            <ImageCarousel />
            <br />
            <h2>Featured Artist</h2>
            <DisplayList />
        </Container>
    );
};

export default HomePage;
