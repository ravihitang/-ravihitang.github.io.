import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import {TbHandFinger } from 'react-icons/tb';
import { images } from '../../constants';
import './Footer.css';
import { BsAlignCenter } from 'react-icons/bs';
const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Presidenct Spectrum, Attavar, Mangalore</p>
        <p className="p__opensans">+91 11111111111</p>
        <p className="p__opensans">+91 22222222222</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 class="app__footer-headtext">Rinku Punjabi Dhaba</h1>
        <p className="p__opensans">&quot;Customer's Satisfaction Is Our Motto&quot;</p>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Social</h1>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
    </div>
    <span style={{fontWeight:'bolder'}}><a href="#home"><TbHandFinger style={{marginLeft:25,color:'white'}} size={50}/><br/></a><a class="p__opensans" href="#home">Back To Top</a></span>
    <div className="footer__copyright">
      <p className="p__opensans">Made With ❤️ By Team Beta.</p>
    </div>

  </div>
);

export default Footer;
