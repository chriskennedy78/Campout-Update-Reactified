import React, { useState } from "react";
import {
    Button,
    Label,
    Row,
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
import { RVOPTIONS } from "../app/shared/RVOPTIONS";
import { GROUPSITES } from "../app/shared/GROUPSITES";

const TicketForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState("");
    const [selectedDuration, setSelectedTicketDuration] = useState("");
    const [selectedCampingOptions, setSelectedCampingOptions] = useState("");
    const [selectedRvOptions, setSelectedRvOptions] = useState("");
    const [selectedGroupSite, setGroupSite] = useState("");
    const [totalCost, setTotalCost] = useState(0);

    const handleSubmit = (values, { resetForm }) => {
        let cost = 0;
        if (values.hasMembership === "no") {
            if (values.membershipType === "occasional") {
                cost += 25;
            } else if (values.membershipType === "frequent") {
                cost += 60;
            }
        }
        setTotalCost(cost);

        console.log("form values:", values);
        console.log("in JSON format:", JSON.stringify(values));
        console.log("Total Cost:", cost);
        resetForm();
        setModalOpen(false);
        setSelectedTicket("");
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
                            hasMembership: "",
                            membershipNumber: "",
                            membershipType: "",
                            ticketType: "",
                            ticketDuration: [],
                            amenities: "",
                            ticketPrice: 0,
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange }) => (
                            <Form>
                                <FormGroup>
                                    <Row>Membership Status</Row>
                                    <Row>
                                        <Label>
                                            <Field
                                                type="radio"
                                                name="hasMembership"
                                                value="yes"
                                            />
                                            Yes, I have a membership
                                        </Label>
                                    </Row>
                                    {values.hasMembership === "yes" && (
                                        <FormGroup>
                                            <Label htmlFor="membershipNumber">
                                                Membership Number:
                                            </Label>
                                            <Field
                                                type="text"
                                                name="membershipNumber"
                                                id="membershipNumber"
                                            />
                                        </FormGroup>
                                    )}
                                    <Row>
                                        <Label>
                                            <Field
                                                type="radio"
                                                name="hasMembership"
                                                value="no"
                                            />
                                            No, I don't have a membership
                                        </Label>
                                    </Row>
                                    {values.hasMembership === "no" && (
                                        <FormGroup>
                                            <Label htmlFor="membershipType">
                                                Select Membership Type:
                                            </Label>
                                            <Field
                                                onChange={(event) => {
                                                    handleChange(event);
                                                }}
                                                as="select"
                                                name="membershipType"
                                                id="membershipType"
                                            >
                                                <option value="">
                                                    Select Type
                                                </option>
                                                <option value="occasional">
                                                    Occasional Use: $25
                                                </option>
                                                <option value="frequent">
                                                    Frequent Use: $60
                                                </option>
                                            </Field>
                                        </FormGroup>
                                    )}
                                </FormGroup>

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

                                {selectedTicket &&
                                    TICKETS.find(
                                        (ticket) =>
                                            ticket.type === selectedTicket
                                    ).ticketDuration.map((duration) => {
                                        return (
                                            <FormGroup>
                                                <Label htmlFor="ticketDurations">
                                                    Ticket Duration
                                                </Label>
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
                                            </FormGroup>
                                        );
                                    })}

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
                                            setSelectedCampingOptions(
                                                event.target.value
                                            );
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
                                {selectedCampingOptions === "RV/Camper" && (
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label htmlFor="rvInfo">
                                                    RV Info
                                                </Label>
                                                <Field
                                                    name="rvInfo"
                                                    as="select"
                                                    className="form-control"
                                                    onChange={(event) => {
                                                        handleChange(event);
                                                        setSelectedRvOptions(
                                                            event.target.value
                                                        );
                                                    }}
                                                >
                                                    <option value="">
                                                        Select...
                                                    </option>
                                                    {RVOPTIONS.map(
                                                        (options) => (
                                                            <option
                                                                key={options.id}
                                                                value={
                                                                    options.rvStyle
                                                                }
                                                            >
                                                                {
                                                                    options.rvStyle
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </Field>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup row>
                                                <Label htmlFor="rvLength">
                                                    RV/Camper Length
                                                </Label>
                                                <Col md="10">
                                                    <Field
                                                        name="rvLength"
                                                        placeholder="Enter Length in feet"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                )}

                                {selectedCampingOptions ===
                                    "group campsite" && (
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label htmlFor="groupSite">
                                                    Requested Group Site
                                                </Label>
                                                <Field
                                                    name="groupSite"
                                                    as="select"
                                                    className="form-control"
                                                    onChange={(event) => {
                                                        handleChange(event);
                                                        setGroupSite(
                                                            event.target.value
                                                        );
                                                    }}
                                                >
                                                    <option value="">
                                                        Select...
                                                    </option>
                                                    {GROUPSITES.map(
                                                        (options) => (
                                                            <option
                                                                key={options.id}
                                                                value={
                                                                    options.name
                                                                }
                                                            >
                                                                {options.name}
                                                            </option>
                                                        )
                                                    )}
                                                </Field>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup row>
                                                <Label htmlFor="groupName">
                                                    Name of Group
                                                </Label>
                                                <Col md="10">
                                                    <Field
                                                        name="groupName"
                                                        placeholder="Enter Group Name"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                )}

                                <FormGroup>
                                    <Label htmlFor="totalCost">
                                        Total Cost: ${totalCost}
                                    </Label>
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
