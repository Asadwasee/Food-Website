import React from 'react';
import './BookingForm.css';

const BookingForm = () => {
  return (
    <div className="booking-form">
      <h2>BOOK YOUR TABLE</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone" />
        <input type="date" placeholder="Check-In" />
        <input type="time" placeholder="Time" />
        <input type="number" placeholder="Guest" min="1" />
        <button type="submit">Book Your Table Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
