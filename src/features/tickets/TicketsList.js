import { Row } from "reactstrap";
import TicketCard from "./TicketCard";
import { selectAllTickets } from "./ticketsSlice";

const TicketsList = ({ ticketId }) => {
    const ticket = selectAllTickets();
    return (
        <Row className="ms-auto">
            {ticket.map((ticket) => {
                return (
                    <Row className="m-4" key={ticket.id}>
                        <TicketCard ticket={ticket} />
                    </Row>
                );
            })}
        </Row>
    );
};

export default TicketsList;
