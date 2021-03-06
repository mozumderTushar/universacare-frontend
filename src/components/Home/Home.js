import React from 'react';
import Appointment from '../Appointment/Appointment.js';
import BestCareviger from '../BestCareviger/BestCareviger.js';
import ChapAccreditation from '../ChapAccreditation/ChapAccreditation.js';
import Coverage from '../Coverage/Coverage.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import NotificationBar from '../NotificationBar/NotificationBar.js';
import RequestAppointment from '../RequestAppointment/RequestAppointment.js';
import Reviews from '../Reviews/Reviews.js';

const Home = () => {
  return (
    <div>
      <Header />
      <NotificationBar />
      <Appointment />
      <Coverage />
      <BestCareviger />
      <ChapAccreditation />
      <Reviews />
      <RequestAppointment />
      <Footer />
    </div>
  );
};

export default Home;