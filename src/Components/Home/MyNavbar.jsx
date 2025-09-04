import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/shape-14.png';
import '../../Styles/Home/MyNavbar.css';

export default function MyNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to="/" className="logo-box">
        <img src={logo} alt="Logo" className="logo-img" loading="lazy" />
        Little Learners
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="nav-links">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/academics">Academics</Nav.Link>
          <Nav.Link as={Link} to="/admissions">Admissions</Nav.Link>
          <Nav.Link as={Link} to="/student-life">Student Life</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="contact-btn">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
