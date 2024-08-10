import React from 'react';
import './ChefCard.css'; // Optional: For styling

const ChefCard = ({ chef }) => {
  return (
    <div className="chef-card">
      <img src={chef.image} alt={chef.name} className="chef-image" />
      <h3>{chef.name}</h3>
      <p>{chef.title}</p>
      <p>{chef.description}</p>
    </div>
  );
};

export default ChefCard;
