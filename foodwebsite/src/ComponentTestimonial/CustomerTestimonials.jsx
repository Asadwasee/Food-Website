import React, { useEffect, useRef } from 'react';
import './CustomerTestimonials.css'; // or './TestimonialSlider.css'

const testimonials = [
  {
    imageUrl: '/path/to/image1.jpg',
    name: 'John Doe',
    review: 'The food was amazing and the service was excellent!',
  },
  // Add more testimonials as needed
];

const CustomerTestimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const scrollSlider = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 2; // Adjust the speed by changing the value
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
          sliderRef.current.scrollLeft = 0; // Loop back to start
        }
      }
    };

    const intervalId = setInterval(scrollSlider, 30); // Adjust the interval speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="testimonial-container">
      <h1 className="testimonial-heading">Happy Customer</h1>
      <div className="testimonial-slider" ref={sliderRef}>
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

export default CustomerTestimonials;
