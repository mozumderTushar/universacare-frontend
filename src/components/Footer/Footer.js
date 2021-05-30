import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import chap from '../assets/Icons/chap.png';
import mwbe from '../assets/Icons/MWBE.png';
import logo from '../assets/Icons/un_logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <p className="footer__headquaters">HEADQUARTERS</p>
            <p className="footer__headquaters__text">246-50 57th Drive <br /> Douglaston, NY 11362  <br />  hello@universacare.com  <br />  P: (718) 224-3758  <br />  F: 8777999065</p>
            <img className="img-fluid footer__logo" src={logo} alt="" />
          </Col>
          <Col md={2} xs={6}>
            <p className="footer__header">SERVICES</p>
            <div className="footer__text">
              <p><i className="far fa-circle circle"></i>Hourly Care</p>
              <p><i className="far fa-circle circle"></i>Daily Care</p>
              <p><i className="far fa-circle circle"></i>Hospital to Home</p>
              <p><i className="far fa-circle circle"></i>Respite Care</p>
              <p><i className="far fa-circle circle"></i>Specialized Care</p>
            </div>
          </Col>
          <Col md={2} xs={6}>
            <p className="footer__header">COMPANY</p>
            <div className="footer__text">
              <p><i className="far fa-circle circle"></i>About us</p>
              <p><i className="far fa-circle circle"></i>Locations</p>
              <p><i className="far fa-circle circle"></i>Caregivers</p>
              <p><i className="far fa-circle circle"></i>News & Blog</p>
              <p><i className="far fa-circle circle"></i>Contact Us</p>
              <p><i className="far fa-circle circle"></i>FAQ</p>
            </div>
          </Col>
          <Col md={4}>
            <p className="contact__form">Sign up to receive the latest articles</p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your email address" />
              </Form.Group>
              <Button className="footer__submit__btn common__bg__color" variant="primary" type="submit">Submit</Button>
            </Form>

            <div className="footer__icon__group">
              <Row>
                <Col md={3} xs={6}><img src={chap} className="footer_icon" alt="" /></Col>
                <Col md={3} xs={6}><img src={mwbe} className="footer_icon" alt="" /></Col>
              </Row>
            </div>

            <p className="follow__us common__text__color">Follow Us:
                <span className="follow__us__icon">
                <i className="fab fa-facebook-square individual__icon"></i> <i className="fab fa-instagram-square individual__icon"></i> <i className="fab fa-linkedin individual__icon"></i> <i className="fab fa-twitter"></i>
              </span>
            </p>
          </Col>
        </Row>
      </Container>
      <hr/>
      <Container className="copyright">
        <p>Copyright 2020 <span>Universacare</span> - All rights reserved</p>
      </Container>
    </div>
  );
};

export default Footer;