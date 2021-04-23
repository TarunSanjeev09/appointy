import React from 'react';
import './HomePage.css';
import GridHero from '../../GridHero';
import { gridOne, gridTwo } from './gridData';
import Scroll_1 from './PageSections/Scroll_1';
import Scroll_3 from './PageSections/Scroll_3';
import Scroll_4 from './PageSections/Scroll_4';
import Scroll_5 from './PageSections/Scroll_5';
import Scroll_6 from './PageSections/Scroll_6';
import Scroll_8 from './PageSections/Scroll_8';
import Scroll_9 from './PageSections/Scroll_9';
import Scroll_10 from './PageSections/Scroll_10';
import Scroll_11 from './PageSections/Scroll_11';
import Scroll_12 from './PageSections/Scroll_12';
import Footer from './PageSections/Footer';

function Home() {
  return (
    <>
    <Scroll_1 ></Scroll_1>
    <GridHero {...gridOne}/>
    <Scroll_3></Scroll_3>
    <Scroll_4></Scroll_4>
    <Scroll_5></Scroll_5>
    <Scroll_6></Scroll_6>
    <GridHero {...gridTwo}/>
    <Scroll_8></Scroll_8>
    <Scroll_9></Scroll_9>
    <Scroll_10></Scroll_10>
    <Scroll_11></Scroll_11>
    <Scroll_12></Scroll_12>
    <Footer></Footer>
      
    </>
  );
}

export default Home;