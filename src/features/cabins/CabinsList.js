import { Col, Row } from "reactstrap";
import CabinCard from "./CabinCard";
import { selectAllCabins } from "./cabinsSlice";

const CabinsList = () => {
    const cabins = selectAllCabins();
    return (
        <Row className="ms-auto">
            {cabins.map((cabin) => {
                return (
                    <Col md="5" className="m-4" key={cabin.id}>
                        <CabinCard cabin={cabin} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CabinsList;
