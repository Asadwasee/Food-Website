import React from 'react';
import FooterSection from './FooterSection';
import './Footer.css'; // Optional: For styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>We Make Delicious & Nutritious Food</h2>
        <button className="book-table-btn">Book A Table Now</button>
      </div>
      <div className="footer-main">
        <FooterSection title="TASTE.IT">
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </FooterSection>
        <FooterSection title="OPEN HOURS">
          <ul>
            <li>Monday: 9:00 - 24:00</li>
            <li>Tuesday: 9:00 - 24:00</li>
            <li>Wednesday: 9:00 - 24:00</li>
            <li>Thursday: 9:00 - 24:00</li>
            <li>Friday: 9:00 - 02:00</li>
            <li>Saturday: 9:00 - 02:00</li>
            <li>Sunday: Closed</li>
          </ul>
        </FooterSection>
        <FooterSection title="INSTAGRAM">
          <div className="instagram-images">
            <img src="https://themewagon.github.io/tasteit/images/insta-4.jpg" alt="Instagram 1" />
            <img src="https://themewagon.github.io/tasteit/images/insta-1.jpg" alt="Instagram 2" />
            <img src="https://themewagon.github.io/tasteit/images/insta-2.jpg" alt="Instagram 3" />
            <img src="https://themewagon.github.io/tasteit/images/insta-3.jpg" alt="Instagram 4" />
            <img src="https://themewagon.github.io/tasteit/images/insta-5.jpg" alt="" />
            <img src="https://themewagon.github.io/tasteit/images/insta-6.jpg" alt="" />
          </div>
        </FooterSection>
        <FooterSection title="NEWSLETTER">
          <p>Far far away, behind the word mountains, far from the countries.</p>
          <input type="email" placeholder="Enter email address" className="newsletter-input" />
          <button className="subscribe-btn">Subscribe</button>
        </FooterSection>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with <span role="img" aria-label="heart">❤️</span> by Colorlib</p>
      </div>
    </footer>
  );
};

export default Footer;
