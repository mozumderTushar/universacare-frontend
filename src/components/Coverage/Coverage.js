import React from 'react';
import location from '../assets/Icons/location.png'
import './Coverage.css'

const Coverage = () => {
  return (
    <div>
      <div className="d-flex justify-content-center coverage">
        <img src={location} className="img-fluid location__icon" alt="location" />
        <p className="coverage__text">UNIVERSACARE AREAS OF COVERAGE</p>
      </div>
    </div>
  );
};

export default Coverage;