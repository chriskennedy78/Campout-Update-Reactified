import { Container } from "reactstrap";
// import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";
import ImageCarousel from "../features/carousel/ImageCarousel";

const HomePage = () => {
    return (
        <Container>
            <SubHeader current="Home" />
            {/* <DisplayList /> */}
            <ImageCarousel />
        </Container>
    );
};

export default HomePage;
