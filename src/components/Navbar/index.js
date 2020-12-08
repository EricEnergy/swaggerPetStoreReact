import React, { useState} from "react";
import "./style.css";
import { Navbar, Nav } from 'react-bootstrap';
import { HashRouter as Router, Route, Link } from "react-router-dom";


function NavBar() {

    const [positionColor, setPositionColor] = useState(true);

    const navClick = (e) => {
        if (e.target.innerText === "Dashboard (Functional)") {
            setPositionColor(true)
        } else {
            setPositionColor(false)
        };
    };

    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand >Pet Store</Navbar.Brand>
            <Nav className="mr-auto">
                <Link onClick={navClick} className={positionColor ? "dash-Class" : "nav-link"} to="/">Dashboard (Functional)</Link>
                <Link disabled to={null} className="nav-link">|</Link>
                <Link onClick={navClick} className={!positionColor ? "dash-Class" : "nav-link"} to="/dashboard2">Dashboard (Class)</Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;


