import React from 'react';
import { SubHeading } from '../../components';
import './FindUs.css';
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Rinku Punjabi Kadai, Presidency Spectrum Building, near KMC Hospital, Attavar, Mangaluru, Karnataka</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 AM - 11:00 PM</p>
        <p className="p__opensans">Sat - Sun: 9:00  AM - 10:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Reserve Table Now</button>
    </div>

    <div className="app__wrapper_img">
    <div id="maps"><iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Hotel%20Rinku%20Punjabi%20Kadai,%20Presidency%20spectrum,%20Rinku%20Punjabi%20Kadai,%20Presidency%20Spectrum%20Building,%20near%20KMC%20Hospital,%20Attavar,%20Mangaluru,%20Karnataka%20575002+(Punjabi%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe></div>
    </div>
  </div>
);

export default FindUs;
