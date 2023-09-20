import React from 'react';

import { FindUs, Footer, Gallery,Booking,Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Gallery />
    <SpecialMenu />
    <FindUs />
    <Booking />
    <Footer />
  </div>
);

export default App;
