import React from 'react';
import Appointment from '../Appointment/Appointment.js';
import Header from '../Header/Header.js';
import NotificationBar from '../NotificationBar/NotificationBar.js';

const Home = () => {
  return (
    <div>
      <Header />
      <NotificationBar />
      <Appointment />
    </div>
  );
};

export default Home;