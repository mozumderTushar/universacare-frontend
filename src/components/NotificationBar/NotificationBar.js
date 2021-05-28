import React from 'react';
import { Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Icons/logo.png'
import phone from '../assets/Icons/phone.png'
import './NotificationBar.css';

const NotificationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className="notification__bar mt-1">
      <Navbar.Brand href="/">
        <img className="notification__bar__logo"  src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">ABOUT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link">SERVICES</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resources" className="nav-link">RESOURCES</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">CAREERS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/care" className="nav-link">HOME CARE HEROES</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
          </li>
        </Nav>
        <Nav>
          <img className="img-fluid logo mt-2" src={phone} alt="" />
          <Nav.Link className="phone" href="#">866-986-3356</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NotificationBar;