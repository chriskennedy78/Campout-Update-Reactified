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
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateReservationForm } from "../utils/validateReservationForm";
import { CABINS } from "../app/shared/CABINS";

const ReservationForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCabin, setSelectedCabin] = useState("");
    const [selectedAccommodation, setSelectedAccommodation] = useState("");

    const handleSubmit = (values, { resetForm }) => {
        console.log("form values:", values);
        console.log("in JSON format:", JSON.stringify(values));
        resetForm();
        setModalOpen(false);
    };

    const handleCabinChange = (event) => {
        setSelectedCabin(event.target.value);
        setSelectedAccommodation([]);
    };

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className="fa fa-pencil fa-lg" /> Reserve Cabin
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Make Reservation...
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            phoneNum: "",
                            email: "",
                            agree: false,
                            contactType: "By Phone",
                            cabinName: "",
                            accommodations: "",
                        }}
                        onSubmit={handleSubmit}
                        validate={validateReservationForm}
                    >
                        {({ values, handleChange }) => (
                            <Form>
                                <FormGroup row>
                                    <Label htmlFor="firstName" md="2">
                                        First Name
                                    </Label>
                                    <Col md="10">
                                        <Field
                                            name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="firstName">
                                            {(msg) => (
                                                <p className="text-danger">
                                                    {msg}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="lastName" md="2">
                                        Last Name
                                    </Label>
                                    <Col md="10">
                                        <Field
                                            name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="lastName">
                                            {(msg) => (
                                                <p className="text-danger">
                                                    {msg}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phoneNum" md="2">
                                        Phone
                                    </Label>
                                    <Col md="10">
                                        <Field
                                            name="phoneNum"
                                            placeholder="Phone"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="phoneNum">
                                            {(msg) => (
                                                <p className="text-danger">
                                                    {msg}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md="2">
                                        Email
                                    </Label>
                                    <Col md="10">
                                        <Field
                                            name="email"
                                            placeholder="email"
                                            type="email"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="email">
                                            {(msg) => (
                                                <p className="text-danger">
                                                    {msg}
                                                </p>
                                            )}
                                        </ErrorMessage>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="cabinName">
                                        Cabin Name
                                    </Label>
                                    <Field
                                        name="cabinName"
                                        as="select"
                                        className="form-control"
                                        onChange={(event) => {
                                            handleChange(event);
                                            handleCabinChange(event);
                                        }}
                                    >
                                        <option value="">Select...</option>
                                        {CABINS.map((cabin) => (
                                            <option
                                                key={cabin.id}
                                                value={cabin.name}
                                            >
                                                {cabin.name}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="cabinName">
                                        {(msg) => (
                                            <p className="text-danger">{msg}</p>
                                        )}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="accommodations">
                                        Sleeping Accommodations
                                    </Label>
                                    <Field
                                        name="accommodations"
                                        as="select"
                                        className="form-control"
                                        disabled={!values.cabinName}
                                        onChange={(event) => {
                                            handleChange(event);
                                            selectedAccommodation(
                                                event.target.value
                                            );
                                        }}
                                    >
                                        <option value="">Select...</option>
                                        {selectedCabin &&
                                            CABINS.find(
                                                (cabin) =>
                                                    cabin.name === selectedCabin
                                            ).accommodations.map(
                                                (accommodation) => (
                                                    <option
                                                        key={
                                                            accommodation.bedId
                                                        }
                                                        value={
                                                            accommodation.bedId
                                                        }
                                                    >
                                                        {accommodation.size}
                                                    </option>
                                                )
                                            )}
                                    </Field>
                                    <ErrorMessage name="accommodations">
                                        {(msg) => (
                                            <p className="text-danger">{msg}</p>
                                        )}
                                    </ErrorMessage>
                                </FormGroup>

                                <FormGroup row>
                                    <Label check md={{ size: 4, offset: 2 }}>
                                        <Field
                                            name="agree"
                                            type="checkbox"
                                            className="form-check-input"
                                        />{" "}
                                        May we contact you?
                                    </Label>
                                    <Col md="4">
                                        <Field
                                            name="contactType"
                                            as="select"
                                            className="form-control"
                                        >
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                        </Field>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type="submit" color="primary">
                                            Submit Reservation
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

export default ReservationForm;
