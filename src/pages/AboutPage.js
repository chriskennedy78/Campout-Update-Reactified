import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current="About Us" />
            <Row className="row-content">
                <Col>
                    <p>
                        CampOut is a members only, private campground for women
                        (and boys age 5 and under). For over 24 years, CampOut
                        has provided a natural, safe, friendly, and welcoming
                        environment. We provide a space for women to relax and
                        enjoy camping in an atmosphere that is safe and private.
                        Our land has been developed to offer a comfortable
                        spaces for tents, cars, RVs (minimal hookups available),
                        or rustic cabin camping.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardHeader className="bg-primary text-white">
                            <h3>About the Land</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dd>
                                    Amidst 96 wooded acres, CampOut offers its
                                    members facilities and opportunities for
                                    group and individual recreation and
                                    relaxation. Whether you come to camp by
                                    yourself, with your family, or a group of
                                    friends, you will find plenty of activities
                                    to enjoy, or space and privacy to just
                                    relax. MORE ​CampOut is a members only,
                                    private campground for women (and boys age 5
                                    and under). For over 24 years, CampOut has
                                    provided a natural, safe, friendly, and
                                    welcoming environment. We provide a space
                                    for women to relax and enjoy camping in an
                                    atmosphere that is safe and private. Our
                                    land has been developed to offer a
                                    comfortable spaces for tents, cars, RVs
                                    (minimal hookups available), or rustic cabin
                                    camping. Amidst 96 wooded acres, CampOut
                                    offers its members facilities and
                                    opportunities for group and individual
                                    recreation and relaxation. Whether you come
                                    to camp by yourself, with your family, or a
                                    group of friends, you will find plenty of
                                    activities to enjoy, or space and privacy to
                                    just relax. The property includes Lake
                                    Towanda, an athletic field, sand volleyball,
                                    one basketball goal, miles of wooded hiking
                                    trails, plenty of recreational supplies,
                                    including frisbees, softball equipment, flag
                                    football, and horseshoes. Swimming and
                                    fishing in the lake, use of canoes and
                                    paddleboats, hiking trails, and heated
                                    showers are all free for our members.
                                    Nightly bonfires are available at the main
                                    fire circle and all campers are encouraged
                                    to spend the evening at the fire and meet
                                    new friends. CampOut is dog friendly. Well
                                    behaved dogs are welcome during all general
                                    camping weekends. Dogs are not allowed
                                    during the Virginia Women’s Music Festival.
                                    We ask that dogs be under voice or leash
                                    control at all times and that you clean up
                                    after your dog. CampOut is located between
                                    Richmond and Charlottesville just off Route
                                    64 in Kents Store, Virginia. We are open
                                    from the first weekend in April through the
                                    last weekend in October annually.
                                </dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {/* <Row className="row-content">
                <Col xs="12">
                    <h3>Community Partners</h3>
                </Col>
                <PartnersList />
            </Row> */}
        </Container>
    );
};

export default AboutPage;
