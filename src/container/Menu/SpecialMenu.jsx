import React,{useState} from 'react';
import { images } from '../../constants';
import './SpecialMenu.css';
const SpecialMenu = () => (

  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <p className="p__cormorant">Menu that fits your palatte</p> 
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Punjabi Dum Biryani</p>
        <div className="app__specialMenu_menu_items">
        <img id="splmenu" src={images.biryani} alt="menu__img" />
        </div>
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Pasta</p>
        <div className="app__specialMenu_menu_items">
        <img id="splmenu" src={images.biryani} alt="menu__img" />
        </div>
      </div>
    </div>
    <div style={{marginTop:-20}}>
      <button type="button"><a href="./MenuPage.html">Full Menu</a></button>
    </div>
    </div>
);

export default SpecialMenu;
