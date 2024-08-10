import React from 'react';
import './Footer.css'; // Optional: For styling

const FooterSection = ({ title, children }) => {
  return (
    <div className="footer-section">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default FooterSection;
