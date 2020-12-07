import React from "react";
import "./style.css";
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Pet Store</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Dashboard (Functional)  </Nav.Link>
                <Nav.Link disabled href="null">|</Nav.Link>
                <Nav.Link href="/dashboard2">Dashboard (Class)</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;


