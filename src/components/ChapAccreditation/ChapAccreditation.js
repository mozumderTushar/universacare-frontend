import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import chap from '../assets/Icons/CHAP-Standards.png'
import './ChapAccreditation.css'

const ChapAccreditation = () => {
  return (
    <Container>
      <div className="chap__accreditation">
        <Row>
          <Col md={4}  md={{  offset: 1 }}>
            <img src={chap} alt="" />
          </Col>
          <Col md={8}>
            <div className="common__text__color mt-3 chap__accreditation__text">
              <h3>CHAP Accreditation and this line can be about this big</h3>
              <p>UniversaCare, LLC will provide the following home health care programs at flexible schedules and cost-friendly service rates. </p>
            </div>
          </Col>
        </Row>

      </div>
    </Container>
  );
};

export default ChapAccreditation;