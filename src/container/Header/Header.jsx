import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="A Taste Of Tradition" />
      <h1 className="app__header-h1">Punjab Di Shaan, Swaad Mein Jaan!</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>The key to a fine dining experience that is more than just a meal.</p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img id="bukk" src={images.bhukkad} alt="header_img" /> 
    </div>
  </div>
);

export default Header;
