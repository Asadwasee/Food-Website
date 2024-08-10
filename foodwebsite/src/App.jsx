import React from 'react';
import Navbar from './Component/Navbar';
import Carousel from './ComponentHomePage/Carousel';
import ComponentBanner from './ComponentBar/ComponentBanner';
import ComponentMenu from './ComponentMenu/ComponentMenu';
import ComponentTestimonial from './ComponentTestimonial/ComponentTestimonial';
import HomePage from './ComponentBooking/Homepage';
import ChefPage from './CompnentChefPage/ChefPage';
import Footer from './ComponentFooter/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <HomePage/>
      <ComponentBanner/>
      <ComponentMenu/>
      <ComponentTestimonial/>
      <ChefPage/>
      <Footer/>
    </div>
  );
}

export default App;
