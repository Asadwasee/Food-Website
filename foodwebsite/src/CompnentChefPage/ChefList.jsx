import React from 'react';
import ChefCard from './ChefCard';
import './ChefList.css'; // Optional: For styling

const ChefList = ({ chefs }) => {
  return (
    <div className="chef-list">
      {chefs.map((chef, index) => (
        <ChefCard key={index} chef={chef} />
      ))}
    </div>
  );
};

export default ChefList;
