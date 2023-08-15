import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCabinById } from "../features/cabins/cabinsSlice";
import CabinDetail from "../features/cabins/CabinDetail";
// import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";
import ReservationForm from "../components/ReservationForm";

const CabinDetailPage = () => {
    const { cabinId } = useParams();
    const cabin = selectCabinById(cabinId);

    return (
        <Container>
            <SubHeader current={cabin.name} detail={true} />
            <Row>
                <Col sm="6">
                    <CabinDetail cabin={cabin} />
                    {/* <CommentsList cabinId={cabinId} /> */}
                </Col>
                <Col>
                    <ReservationForm />
                </Col>
            </Row>
        </Container>
    );
};

export default CabinDetailPage;
