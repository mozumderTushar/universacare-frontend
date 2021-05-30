import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BestCareviger.css'
import consultation from '../assets/Icons/Consultation.png'
import plan from '../assets/Icons/Plan.png'
import matching from '../assets/Icons/Matching.png'
import supervision from '../assets/Icons/Supervision.png'
import tryImg from '../assets/Icons/Vector1.png'

const careviger_data = [
  {
    id: 1,
    img: consultation,
    header: '1. Initial Consultation',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.'
  },
  {
    id: 2,
    img: plan,
    header: '2. Customized Care Plan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.'
  },
  {
    id: 3,
    img: matching,
    header: '3. Caregiver Matching',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.'
  },
  {
    id: 4,
    img: supervision,
    header: '4. Ongoing Support & Supervision',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.'
  }
]

const BestCareviger = () => {
  return (
    <div className="text-center best__careviger">
      <h1>How We Find <span>Best Careviger</span> For You</h1>
      <Container>
        <Row>
          {
            careviger_data.map(data => (
              <Col md={3} key={data.id}>
                <img src={data.img} alt="Careviger Img"  />
                <h3 className="common__text__color">{data.header}</h3>
                <p className="common__text__color">{data.text}</p>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default BestCareviger;