import { Container } from "reactstrap";
import CabinsList from "../features/cabins/CabinsList";
import SubHeader from "../components/SubHeader";

const CabinReservationsPage = () => {
    return (
        <Container>
            <SubHeader current="CabinReservations" />
            <CabinsList />
        </Container>
    );
};

export default CabinReservationsPage;
