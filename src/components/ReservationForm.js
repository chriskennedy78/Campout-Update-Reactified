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
import { useState } from "react";

const ReservationForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleSubmit = (values, { resetForm }) => {
        console.log("form values:", values);
        console.log("in JSON format:", JSON.stringify(values));
        resetForm();
        setModalOpen(false);
    };

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className="fa fa-pencil fa-lg" /> Reserve Cabin
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Make Reservation
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
                            feedback: "",
                            cabinId: "",
                        }}
                        onSubmit={handleSubmit}
                        validate={validateReservationForm}
                    >
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
                                            <p className="text-danger">{msg}</p>
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
                                            <p className="text-danger">{msg}</p>
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
                                            <p className="text-danger">{msg}</p>
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
                                            <p className="text-danger">{msg}</p>
                                        )}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="cabinName">Cabin Name</Label>

                                <Field
                                    name="cabinName"
                                    as="select"
                                    className="form-control"
                                >
                                    <option>Select...</option>
                                    <option>Ameila</option>
                                    <option>Calamity</option>
                                    <option>Sundance</option>
                                    <option>Thelma</option>
                                    <option>Lousie</option>
                                    <option>
                                        Thelma and Lousie (requires group
                                        reservation)
                                    </option>
                                </Field>

                                <ErrorMessage name="sleepingAccommodations">
                                    {(msg) => (
                                        <p className="text-danger">{msg}</p>
                                    )}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="sleepingAccommodations">
                                    Sleeping Accommodations
                                </Label>
                                <Field
                                    name="sleepingAccommodations"
                                    as="select"
                                    className="form-control"
                                >
                                    <option>Select...</option>
                                    <option>bed 1</option>
                                    <option>bed 2</option>
                                    <option>bed 3</option>
                                    <option>bed 4</option>
                                    <option>bed 5</option>
                                </Field>
                                <ErrorMessage name="sleepingAccommodations">
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
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default ReservationForm;
