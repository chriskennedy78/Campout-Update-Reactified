import { Row } from "reactstrap";
import MembershipCard from "./MembershipCard";
import { selectAllMemberships } from "./membershipsSlice";

const MembershipList = ({ membershipId }) => {
    const membership = selectAllMemberships();
    return (
        <Row className="ms-auto">
            {membership.map((membership) => {
                return (
                    <Row className="m-4" key={membership.id}>
                        <MembershipCard membership={membership} />
                    </Row>
                );
            })}
        </Row>
    );
};

export default MembershipList;
