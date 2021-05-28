import React from 'react';
import informationIcon from '../assets/Icons/information.png'
import './Header.css'

const Header = () => {
  return (
    <div className="d-flex justify-content-center precautions">
      <img className="img-fluid information_icon" src={informationIcon} alt="informationIcon"  />
      <p className="common__color mt-1">READ ABOUT OUR COVID-19 PRECAUTIONS </p>
    </div>
  );
};

export default Header;