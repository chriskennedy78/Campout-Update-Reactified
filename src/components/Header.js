import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import CampoutLogo from "../app/assets/img/campout-logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark color="primary" sticky="top" expand="md">
            <NavbarBrand href="/" className="ms-5">
                <img
                    src={CampoutLogo}
                    alt="CampOut logo"
                    className="float-start"
                    style={{ height: 100, width: 300 }}
                />
                <h6 className="mt-5">
                    A secluded, natural, getaway for women. Home of the Virginia
                    Women's Music Festival
                </h6>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            <i className="fa fa-home fa-lg" /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/cabinReservations">
                            <i className="fa fa-list fa-lg" /> Cabin
                            Reservations
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/about">
                            <i className="fa fa-info fa-lg" /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contact">
                            <i className="fa fa-address-card fa-lg" /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
