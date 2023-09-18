import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header,Booking, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Gallery />
    <SpecialMenu />
    <Booking />
    <AboutUs />
    <FindUs />
    <Footer />
  </div>
);

export default App;
