import { Container, Row, Col } from "reactstrap";
import SubHeader from "../components/SubHeader";

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current="Contact" />
            <Row className="row-content align-items-center">
                <Col sm="4">
                    <h5>CAMPOUT BUSINESS OFFICE</h5>
                    <address>
                        9505 Minna Dr.
                        <br />
                        Henrico VA, 23229
                    </address>
                </Col>
                <Col>
                    <a
                        role="button"
                        className="btn btn-link"
                        href="tel:+18043013553"
                    >
                        <i className="fa fa-phone" /> 1-804-301-3553
                    </a>
                    <br />
                    <a
                        role="button"
                        className="btn btn-link"
                        href="mailto:campoutva@gmail.com"
                    >
                        <i className="fa fa-envelope-o" /> campoutva@gmail.com
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
