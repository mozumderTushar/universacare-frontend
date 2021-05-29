import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './RequestAppointment.css';
import healthCare from '../assets/Images/healthcare.png'

const RequestAppointment = () => {
  return (
    <div className="request__appointment">
      <Row>
        <Col md={6}>
          <h1>WE DO WHATEVER IT MAKES TO  BRING YOU PEACE OF MIND</h1>
          <Button className="request_appointment__btn"><span className="request_appointment__btn__text">REQUEST AN APPOINTMENT</span></Button>
        </Col>
        <Col md={4} md={{ offset: 3 }}>
          <img className="img-fluid request_appointment__img" src={healthCare} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default RequestAppointment;