import React from "react";
import "./style.css";
import { Navbar, Nav } from 'react-bootstrap';
import { HashRouter as  Link } from "react-router-dom";


function NavBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >Pet Store</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/">Dashboard (Functional)  </Link>
                <Nav.Link disabled href="null">|</Nav.Link>
                <Link to="/dashboard2">Dashboard (Class)</Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;


