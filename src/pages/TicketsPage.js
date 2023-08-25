import {
    Col,
    Row,
    Container,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
} from "reactstrap";
import SubHeader from "../components/SubHeader";
import ArtistsList from "../features/artists/ArtistsList";
import TicketsList from "../features/tickets/TicketsList";

const TicketsPage = () => {
    return (
        <Container>
            <SubHeader current="Tickets" />
            <Row className="row-content">
                <Col>
                    <h2>Virginia Women's Music Festival Tickets</h2>
                    <h3>
                        Our biggest event of the year. Join us Memorial Day
                        Weekend for music, dancing, games, and great food. Be a
                        worker, be a vendor, or just be there!
                    </h3>
                </Col>
            </Row>
            <Row>
                <TicketsList />
            </Row>
            {/* <Row>
                <Col>
                    <TicketForm ticket={ticket} />
                </Col>
            </Row> */}
            {/* <Row>
                <h1>Music Festival Line Up</h1>
                <ArtistsList />
            </Row> */}
        </Container>
    );
};

export default TicketsPage;
