
import "bootstrap/dist/css/bootstrap.min.css"; 
import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// Import logo if it's in the src folder


const Appbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container fluid>
        {/* Brand Logo */}
        <Navbar.Brand className="p-2 d-flex align-items-center">
          <img src={'./img/download logo.png'} className="navlogo me-2" alt="Logo" />
          <h2 className="topic mb-0">
            REAL - <span className="text-danger">ESTATE</span>
          </h2>
        </Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Navbar Menu */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto px-3">
            <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
            <Nav.Link as={Link} to="/Land" className="nav-item">Land</Nav.Link>
            <Nav.Link as={Link} to="/About" className="nav-item">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="nav-item">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Login" className="nav-item">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
