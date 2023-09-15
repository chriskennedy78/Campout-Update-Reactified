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

import { MEMBERSHIPS } from "../app/shared/MEMBERSHIPS";
import { validateMembershipForm } from "../utils/validateMembershipForm";

const MembershipForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log("form values:", values);
        console.log("in JSON format:", JSON.stringify(values));
        console.log("membership cost line 24:", membershipCost);
        resetForm();
        setSelectedMembership(""); // Clear selected membership
        setMembershipCost(0); // Clear membership cost
        setModalOpen(false);
    };
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMembership, setSelectedMembership] = useState("");
    const [membershipCost, setMembershipCost] = useState(0);

    const handleCloseModal = (values, { resetForm }) => {
        setSelectedMembership(null); // Reset selected membership
        setMembershipCost(0); // Reset membership cost
        resetForm();
        setModalOpen(false);
    };

    const handleMembershipChange = (event) => {
        const selectedMembership = MEMBERSHIPS.find(
            (membership) => membership.id === parseInt(event.target.value)
        );
        setSelectedMembership(selectedMembership);
        setMembershipCost(selectedMembership ? selectedMembership.cost : 0);
    };
    console.log("Selected Membership Object:", selectedMembership);
    console.log(
        "Membership Cost handlechange:",
        selectedMembership ? selectedMembership.cost : 0
    );

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className="fa fa-pencil fa-lg" /> Purchase Membership
            </Button>
            {/* added toggle here to try and clear the membership field when modal closed...it doesnt work*/}
            <Modal isOpen={modalOpen} toggle={handleCloseModal}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Membership Information and Type
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
                            membershipType: "",
                        }}
                        onSubmit={handleSubmit}
                        validate={validateMembershipForm}
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
                                    <Label htmlFor="membershipType">
                                        Membership Type
                                    </Label>{" "}
                                    <Field
                                        name="membershipType"
                                        as="select"
                                        className="form-control"
                                        onChange={handleMembershipChange}
                                        value={
                                            selectedMembership
                                                ? selectedMembership.id
                                                : ""
                                        }
                                    >
                                        <option value="">
                                            Select a Membership Type
                                        </option>
                                        {MEMBERSHIPS.map((membership) => (
                                            <option
                                                key={membership.id}
                                                value={membership.id}
                                            >
                                                {membership.name}
                                            </option>
                                        ))}
                                    </Field>
                                    {selectedMembership && (
                                        <div>
                                            <p>Cost: ${membershipCost}</p>
                                        </div>
                                    )}
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
                                            Submit Membership Request
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

export default MembershipForm;

//OLD FORM

// import React, { useState } from "react";
// import {
//     Button,
//     Label,
//     Col,
//     FormGroup,
//     Modal,
//     ModalBody,
//     ModalHeader,
// } from "reactstrap";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import { validateMembershipForm } from "../utils/validateMembershipForm";
// import { MEMBERSHIPS } from "../app/shared/MEMBERSHIPS";

// const MembershipForm = () => {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [selectedMembership, setSelectedMembership] = useState("");

//     const handleSubmit = (values, { resetForm }) => {
//         console.log("form values:", values);
//         console.log("in JSON format:", JSON.stringify(values));
//         resetForm();
//         setModalOpen(false);
//     };

//     const handleMembershipChange = (event) => {
//         setSelectedMembership(event.target.value);
//     };

//     return (
//         <>
//             <Button outline onClick={() => setModalOpen(true)}>
//                 <i className="fa fa-pencil fa-lg" /> Purchase Membership
//             </Button>
//             <Modal isOpen={modalOpen}>
//                 <ModalHeader toggle={() => setModalOpen(false)}>
//                     Membership Information and Type
//                 </ModalHeader>
//                 <ModalBody>
//                     <Formik
//                         initialValues={{
//                             firstName: "",
//                             lastName: "",
//                             phoneNum: "",
//                             email: "",
//                             agree: false,
//                             contactType: "By Phone",
//                             membershipType: "",
//                         }}
//                         onSubmit={handleSubmit}
//                         validate={validateMembershipForm}
//                     >
//                         {({ values, handleChange }) => (
//                             <Form>
//                                 <FormGroup row>
//                                     <Label htmlFor="firstName" md="2">
//                                         First Name
//                                     </Label>
//                                     <Col md="10">
//                                         <Field
//                                             name="firstName"
//                                             placeholder="First Name"
//                                             className="form-control"
//                                         />
//                                         <ErrorMessage name="firstName">
//                                             {(msg) => (
//                                                 <p className="text-danger">
//                                                     {msg}
//                                                 </p>
//                                             )}
//                                         </ErrorMessage>
//                                     </Col>
//                                 </FormGroup>

//                                 <FormGroup row>
//                                     <Label htmlFor="lastName" md="2">
//                                         Last Name
//                                     </Label>
//                                     <Col md="10">
//                                         <Field
//                                             name="lastName"
//                                             placeholder="Last Name"
//                                             className="form-control"
//                                         />
//                                         <ErrorMessage name="lastName">
//                                             {(msg) => (
//                                                 <p className="text-danger">
//                                                     {msg}
//                                                 </p>
//                                             )}
//                                         </ErrorMessage>
//                                     </Col>
//                                 </FormGroup>
//                                 <FormGroup row>
//                                     <Label htmlFor="phoneNum" md="2">
//                                         Phone
//                                     </Label>
//                                     <Col md="10">
//                                         <Field
//                                             name="phoneNum"
//                                             placeholder="Phone"
//                                             className="form-control"
//                                         />
//                                         <ErrorMessage name="phoneNum">
//                                             {(msg) => (
//                                                 <p className="text-danger">
//                                                     {msg}
//                                                 </p>
//                                             )}
//                                         </ErrorMessage>
//                                     </Col>
//                                 </FormGroup>
//                                 <FormGroup row>
//                                     <Label htmlFor="email" md="2">
//                                         Email
//                                     </Label>
//                                     <Col md="10">
//                                         <Field
//                                             name="email"
//                                             placeholder="email"
//                                             type="email"
//                                             className="form-control"
//                                         />
//                                         <ErrorMessage name="email">
//                                             {(msg) => (
//                                                 <p className="text-danger">
//                                                     {msg}
//                                                 </p>
//                                             )}
//                                         </ErrorMessage>
//                                     </Col>
//                                 </FormGroup>

//                                 <FormGroup>
//                                     <Label htmlFor="membershipType">
//                                         Membership Type
//                                     </Label>{" "}
//                                     <Field
//                                         name="membershipType"
//                                         as="select"
//                                         className="form-control"
//                                         onChange={(event) => {
//                                             handleChange(event);
//                                             handleMembershipChange(event);
//                                         }}
//                                     >
//                                         <option value="">Select...</option>
//                                         {MEMBERSHIPS.map((membership) => (
//                                             <option
//                                                 key={membership.id}
//                                                 value={membership.name}
//                                             >
//                                                 {membership.name}
//                                             </option>
//                                         ))}
//                                     </Field>
//                                     <ErrorMessage name="membershipType">
//                                         {(msg) => (
//                                             <p className="text-danger">{msg}</p>
//                                         )}
//                                     </ErrorMessage>
//                                 </FormGroup>

//                                 <FormGroup row>
//                                     <Label check md={{ size: 4, offset: 2 }}>
//                                         <Field
//                                             name="agree"
//                                             type="checkbox"
//                                             className="form-check-input"
//                                         />{" "}
//                                         May we contact you?
//                                     </Label>
//                                     <Col md="4">
//                                         <Field
//                                             name="contactType"
//                                             as="select"
//                                             className="form-control"
//                                         >
//                                             <option>By Phone</option>
//                                             <option>By Email</option>
//                                         </Field>
//                                     </Col>
//                                 </FormGroup>

//                                 <FormGroup>
//                                     <Col md={{ size: 10, offset: 2 }}>
//                                         <Button type="submit" color="primary">
//                                             Submit Membership Request
//                                         </Button>
//                                     </Col>
//                                 </FormGroup>
//                             </Form>
//                         )}
//                     </Formik>
//                 </ModalBody>
//             </Modal>
//         </>
//     );
// };

// export default MembershipForm;
