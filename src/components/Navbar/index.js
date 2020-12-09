import React, { useState, useEffect } from "react";
import "./style.css";
import { Navbar, Nav } from 'react-bootstrap';
import { HashRouter as Router, Route, Link } from "react-router-dom";


function NavBar(props) {

    const [positionColor, setPositionColor] = useState(true);

    useEffect(() => {
        if (props.location === "dashboard1") {
            setPositionColor(true)
        } else {
            setPositionColor(false)
        };
    }, []);

    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand >Pet Store</Navbar.Brand>
            <Nav className="mr-auto">
                <Link className={positionColor ? "dash-Class" : "nav-link"} to="/">Dashboard (Functional)</Link>
                <Link disable={true} className="nav-link">|</Link>
                <Link className={!positionColor ? "dash-Class" : "nav-link"} to="/dashboard2">Dashboard (Class)</Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;


