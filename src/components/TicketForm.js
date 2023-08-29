import React, { useState } from "react";
import {
    Button,
    Label,
    Col,
    FormGroup,
    Modal,
    ModalBody,
    ModalHeader,
} from "reactstrap";
import { Formik, Field, Form } from "formik";
import { TICKETS } from "../app/shared/TICKETS";
import { AMENITIES } from "../app/shared/AMENITIES";
import { CAMPINGOPTIONS } from "../app/shared/CAMPINGOPTIONS";

const TicketForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState("");
    const [selectedDuration, setSelectedTicketDuration] = useState("");
    const [selectedAmenities, setSelectedAmenities] = useState("");
    const [slectedCampingOptions, setSelectedCampingOptions] = useState("");

    const handleSubmit = (values, { resetForm }) => {
        console.log("form values:", values);
        console.log("in JSON format:", JSON.stringify(values));
        resetForm();
        setModalOpen(false);
    };

    const handleTicketChange = (event) => {
        setSelectedTicket(event.target.value);
        setSelectedTicketDuration([]);
    };

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className="fa fa-pencil fa-lg" /> Purchase Tickets
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Ticket and Camping Options
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            ticketType: "",
                            ticketDuration: [],
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange }) => (
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="ticketType">
                                        Ticket Type
                                    </Label>
                                    <Field
                                        name="ticketType"
                                        as="select"
                                        className="form-control"
                                        onChange={(event) => {
                                            handleChange(event);
                                            handleTicketChange(event);
                                        }}
                                    >
                                        <option value="">Select...</option>
                                        {TICKETS.map((ticket) => (
                                            <option
                                                key={ticket.id}
                                                value={ticket.type}
                                            >
                                                {ticket.type}
                                            </option>
                                        ))}
                                    </Field>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="ticketDurations">
                                        Ticket Durations
                                    </Label>
                                    {selectedTicket &&
                                        TICKETS.find(
                                            (ticket) =>
                                                ticket.type === selectedTicket
                                        ).ticketDuration.map((duration) => {
                                            return (
                                                <div key={duration.id}>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            name="ticketDuration"
                                                            value={duration.id}
                                                        />
                                                        {duration.duration}
                                                    </label>
                                                </div>
                                            );
                                        })}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="amenities">Amenities</Label>
                                    {AMENITIES.map((amenities) => {
                                        return (
                                            <div key={amenities.id}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="amenities"
                                                        value={amenities.id}
                                                    />
                                                    {amenities.type} - $
                                                    {amenities.cost}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="campingOptions">
                                        Camping Options
                                    </Label>
                                    <Field
                                        name="campingOptions"
                                        as="select"
                                        className="form-control"
                                        onChange={(event) => {
                                            handleChange(event);
                                            setSelectedCampingOptions(event);
                                        }}
                                    >
                                        <option value="">Select...</option>
                                        {CAMPINGOPTIONS.map((options) => (
                                            <option
                                                key={options.id}
                                                value={options.type}
                                            >
                                                {options.type}
                                            </option>
                                        ))}
                                    </Field>
                                </FormGroup>

                                <FormGroup>
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type="submit" color="primary">
                                            Purchase Tickets
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default TicketForm;

// COMPLICATED TICKET DURATION

// {
//     /* <FormGroup>
//                                     <Label htmlFor="ticketDurations">
//                                         Ticket Durations
//                                     </Label>
//                                     {selectedTicket &&
//                                         TICKETS.find(
//                                             (ticket) =>
//                                                 ticket.type === selectedTicket
//                                         ).ticketDuration.map((duration) => { */
// }
// const isChecked =
//     values.ticketDuration.includes(
//         duration.id
//     );
// return (
//     <div key={duration.id}>
//         <label>
//             <input
//                 type="checkbox"
//                 name={`ticketDuration.${duration.id}`}
//                 value={duration.id}
// checked={isChecked}
// onChange={(
//     event
// ) => {
//     const durationId =
//         duration.id;
//     const newDuration =
//         isChecked
//             ? values.ticketDuration.filter(
//                   (
//                       id
//                   ) =>
//                       id !==
//                       durationId
//               )
//             : [
//                   ...values.ticketDuration,
//                   durationId,
//               ];

//     handleChange({
//         target: {
//             name: "ticketDuration",
//             value: newDuration,
//         },
//     });
// }}
// />
// {
//     /* {duration.duration}
//                                                     </label>
//                                                 </div>
//                                             );
//                                         })}
//                                 </FormGroup> */
// }
