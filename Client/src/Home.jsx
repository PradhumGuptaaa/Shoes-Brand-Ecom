import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroSection from './IntroSection/IntroSection2.jsx';
import AdvertisingSection from './AdvertisingSection/AdvertisingSection.jsx';

const Home = () => {
  return (
    <div>
      <IntroSection/>
      <AdvertisingSection/>
    </div>
  )
}

export default Home
