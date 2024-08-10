import React from 'react';
import ChefList from './ChefList';
import './ChefPage.css'; 

const ChefPage = () => {
  const chefs = [
    {
      name: 'John Gustavo',
      title: 'CEO, Co Founder',
      description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
      image: 'https://themewagon.github.io/tasteit/images/chef-4.jpg' 
    },
    {
      name: 'Michelle Fraulen',
      title: 'Head Chef',
      description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
      image: 'https://themewagon.github.io/tasteit/images/chef-2.jpg'
    },
    {
      name: 'Alfred Smith',
      title: 'Chef Cook',
      description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
      image: 'https://themewagon.github.io/tasteit/images/chef-1.jpg '
    },
    {
      name: 'Antonio Santibanez',
      title: 'Chef Cook',
      description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
      image: 'https://themewagon.github.io/tasteit/images/chef-3.jpg '
    }
  ];

  return (
    <div className="chef-page">
      <h2>Our Master Chef</h2>
      <ChefList chefs={chefs} />
    </div>
  );
};

export default ChefPage;
