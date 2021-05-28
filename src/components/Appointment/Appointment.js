import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import homeCare from '../assets/Images/home-care.png'
import './Appointment.css'

const Appointment = () => {
  return (
    <div className="appointment">
      <Row className="d-flex align-items-center appointment__box">
        <Col md={6}>
          <h1 className="appointment__head">The Future of Health <br /> Care is Home Care</h1>
          <p className="appointment__info">Over a Decade of Trusted Care.</p>
          <Button className="appointment__btn common__bg__color"><span className="appointment__btn__text">REQUEST AN APPOINTMENT</span></Button>
        </Col>
        <Col md={6}>
          <img className="img-fluid appointment__img" src={homeCare} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Appointment;