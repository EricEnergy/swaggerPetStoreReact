import React from "react";
import "./style.css";
import { Navbar, Nav } from 'react-bootstrap';
import { HashRouter as Router, Route, Link } from "react-router-dom";


function NavBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >Pet Store</Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="nav-link" to="/">Dashboard (Functional)  </Link>
                <Link className="nav-link">|</Link>
                <Link className="nav-link" to="/dashboard2">Dashboard (Class)</Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;


