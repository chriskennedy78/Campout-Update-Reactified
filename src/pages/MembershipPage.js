import {
    Col,
    Row,
    Container,
    Card,
    CardBody,
    CardHeader,
    Button,
} from "reactstrap";
import SubHeader from "../components/SubHeader";
import MembershipList from "../features/memberships/MembershipList";
import MembershipForm from "../components/MembershipForm";

const MembershipPage = () => {
    return (
        <Container>
            <SubHeader current="Memberships" />
            <h1>Memberships</h1>
            <Row className="row-content">
                <Col>
                    <MembershipList />
                </Col>
            </Row>
            <Row>
                <MembershipForm />
            </Row>
            {/* <Row className="row-content">
                <Col>
                    <h2>Frequent Use Membership</h2>
                    <h3>$60 per annual season</h3>
                    <p>
                        Frequent users often prefer the "B" membership because
                        it allows you to camp free on as many General Camp days
                        as you would like throughout the season. Cabin rentals
                        for B members are $15.00 per night, per person.
                    </p>
                </Col>
            </Row> */}

            <Row className="row-content">
                <Col>
                    <h2>Already a Member?</h2>
                    <h3>Sign up for Camp updates</h3>
                    <p>
                        What to know the latest on camp events and projects?
                        Sign up for our Camp update emails!
                    </p>
                    <Button>Placeholder</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default MembershipPage;
