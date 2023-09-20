import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Booking.css';

const Booking = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center" id="Booking">
        <div id="main_main">
      <section className="banner">
        <h2>BOOK YOUR TABLE NOW</h2>
        <div className="card-container">
          <div className="card-img">
          {/*<img src={images.gallery04} alt="book" />*/}
          </div>
          <div className="card-content">
            <h3>Reservation</h3>
            <form>
              <div className="form-row">
                <select id="inp" name="days">
                  <option value="day-select">Select Day</option>
                  <option value="sunday">Sunday</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                </select>

                <select id="inp"  name="hours">
                  <option value="hour-select">Select Hour</option>
                  <option value="10">10:00</option>
                  <option value="12">12:00</option>
                  <option value="14">14:00</option>
                  <option value="16">16:00</option>
                  <option value="18">18:00</option>
                  <option value="20">20:00</option>
                  <option value="22">22:00</option>
                </select>
              </div>

              <div className="form-row">
                <input id="inp" type="text" placeholder="Full Name" />
                <input id="inp" type="text" placeholder="Phone Number" />
              </div>

              <div className="form-row">
                <input id="inp" type="number" placeholder="How Many Persons?" min="1" />
                <input id="inp" type="submit" value="BOOK TABLE" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
      </div>
  );
};

export default Booking;
