import React, { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  {
    src: 'https://thumbs.dreamstime.com/b/delicious-italian-pizza-slice-pizza-cheese-veggie-glorious-generative-ai-delicious-italian-pizza-slice-pizza-275976306.jpg',
    heading: 'Delicious Pizza',
    description: 'Hot and fresh pizza delivered to your doorstep.'
  },
  {
    src: 'https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-delicious-salmon-and-cucumber-sushi-rolls-on-a-green-plate-with-image_16124851.jpg',
    heading: 'Fresh Sushi',
    description: 'Experience the best sushi in town.'
  },
  {
    src: 'https://img.lovepik.com/photo/48013/3318.jpg_wh860.jpg',
    heading: 'Tasty Burgers',
    description: 'Juicy burgers with the freshest ingredients.'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const { src, heading, description } = images[currentIndex];

  return (
    <div className="carousel">
      <img src={src} alt={`Slide ${currentIndex}`} />
      <div className="carousel-text">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Carousel;
