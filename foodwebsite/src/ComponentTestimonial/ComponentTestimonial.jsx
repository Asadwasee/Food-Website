// src/components/ComponentTestimonial/ComponentTestimonial.jsx

import React from 'react';
import './ComponentTestimonial.css';

const testimonials = [
  {
    name: 'John Doe',
    imageUrl: '/path/to/customer1.jpg', // Adjust the path
    review: 'This is the best service I have ever used! Highly recommend to everyone.',
  },
  
  // Add more testimonials as needed
];

const ComponentTestimonial = () => {
  return (
    <div className="testimonial-container">
      <h1 className="testimonial-heading">Happy Customer</h1>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentTestimonial;
