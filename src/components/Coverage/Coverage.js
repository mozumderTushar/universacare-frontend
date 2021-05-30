import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import location from '../assets/Icons/location.png';
import home from '../assets/Images/home.png';
import personal from '../assets/Images/personal.png';
import privateImg from '../assets/Images/private.png';
import respite from '../assets/Images/respite.png';
import life from '../assets/Images/life.png';
import memory from '../assets/Images/memory.png';
import memoryOne from '../assets/Images/memory2.png';
import phone from '../assets/Icons/phone2.png';
import arrow from '../assets/Icons/arrow.png'
import './Coverage.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Coverage = () => {
  const coverage__data = [
    {
      id: 1,
      img: home,
      header: 'Hourly Home care',
      text: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },
    {
      id: 2,
      img: personal,
      header: 'Personal Care',
      text: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },
    {
      id: 3,
      img: privateImg,
      header: 'Private Nursing',
      text: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },
    {
      id: 4,
      img: respite,
      header: 'Respite Care',
      text: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },
    {
      id: 5,
      img: life,
      header: 'Life-in Aid',
      text: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },
    {
      id: 6,
      img: memory,
      header: 'Memory Care',
      text: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    },
    {
      id: 7,
      img: memoryOne,
      header: 'Memory Care',
      text: '4x higher coverage limit than traditional policies for computers and home office equipment.',
    }
  ]

  const primaryOptions = { /** slider option */
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    arrows: 'slider',
  };
  return (
    <div>
      <div className="d-flex justify-content-center coverage">
        <img src={location} className="img-fluid location__icon" alt="location" />
        <p className="coverage__text">UNIVERSACARE AREAS OF COVERAGE</p>
      </div>
      <div className="coverage__area">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="coverages__main">Your peace of mind is <br /> <span className="coverages__main__span">our number one priority.</span></h1>
              <p className="coverages__main__p">UniversaCare offers a range of services for in-home care.  We are your partners in care, and work with you to come up with a plan of action. </p>
            </Col>
            {
              coverage__data.map(coverage => (
                <Col md={2} key={coverage.id} className="coverage__item">
                  <img className="img-fluid single__coverage__img" src={coverage.img} alt="" />
                  <h3 className="single__coverage__head">{coverage.header}</h3>
                  <p className="single__coverage__text">{coverage.text}</p>
                  <img className="img-fluid single__coverage__icon" src={arrow} alt="" />
                </Col>
              ))
            }
            <Col md={4} className="text-center coverage__support">
              <img className="img-fluid" src={phone} alt="" />
              <h3>Do you need support?</h3>
              <p>We glad to help!</p>
              <Button className="common__bg__color coverage__support__btn"><span className="coverage__support__contact">CONTACT US</span></Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="coverage__area__mbl">
        <Col md={6}>
          <h1 className="coverages__main">Your peace of mind is <br /> <span className="coverages__main__span">our number one priority.</span></h1>
          <p className="coverages__main__p">UniversaCare offers a range of services for in-home care.  We are your partners in care, and work with you to come up with a plan of action. </p>
        </Col>
        <Splide options={primaryOptions}>
          {/**--------------------------------- -------- Slider --------------------------------*/
            coverage__data.map(coverage => (
              <SplideSlide>
                <Col md={3} key={coverage.id} className="slider__coverage__item">
                  <Col md={2} key={coverage.id} className="coverage__item">
                    <img className="img-fluid single__coverage__img" src={coverage.img} alt="" />
                    <h3 className="single__coverage__head">{coverage.header}</h3>
                    <p className="single__coverage__text">{coverage.text}</p>
                    <img className="img-fluid single__coverage__icon" src={arrow} alt="" />
                  </Col>
                </Col>
              </SplideSlide>
            ))
          }
        </Splide>
        <Col md={4} className="text-center coverage__support">
          <img className="img-fluid" src={phone} alt="" />
          <h3>Do you need support?</h3>
          <p>We glad to help!</p>
          <Button className="common__bg__color coverage__support__btn"><span className="coverage__support__contact">CONTACT US</span></Button>
        </Col>
      </div>
    </div>
  );
};

export default Coverage;