import React from 'react';
import BookingForm from '../ComponentBooking/BookingForm';
import WelcomeSection from '../ComponentBooking/WelcomeSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <BookingForm />
      <WelcomeSection />
    </div>
  );
};

export default HomePage;
