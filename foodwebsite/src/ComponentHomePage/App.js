import React from 'react';
import Carousel from './components/Carousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Food Delivery</h1>
      </header>
      <main>
        <Carousel />
        <section className="features">
          <h2>Why Choose Us?</h2>
          <div className="features-content">
            <div className="feature">
              <h3>Fast Delivery</h3>
              <p>Get your food delivered in under 30 minutes, guaranteed.</p>
            </div>
            <div className="feature">
              <h3>Fresh Ingredients</h3>
              <p>We use only the freshest ingredients in all our dishes.</p>
            </div>
            <div className="feature">
              <h3>Wide Variety</h3>
              <p>Choose from a wide range of cuisines and dishes.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
