import React from 'react';
import About from './About';
import Contact from './Contact';
import HeroPage from './HeroPage';
import HowWork from './HowWork';
import Footer from "./Footer"
import Service from './Service';
import Testimonail from './Testimonail';

const Landingpage = () => {
  return (
    <div style={{ width: '100%' }}>
      <HeroPage />;
      <HowWork />
      <About />
      <Service />
      <Testimonail />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Landingpage;
