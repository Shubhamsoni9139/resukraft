import React, { useState } from 'react';
import { Logo } from '../assets';
import HeroSectionWriteup from '../components/HomeScreen/HeroSectionWriteup';
import Footer from '../containers/Footer';
import HeaderHomeScreen from '../components/HomeScreen/HeaderHomeScreen';
import HeaderHomeScreenSecondPart from '../components/HomeScreen/HeaderHomeScreenSecondPart';
import HeaderHomeScreenThirdPart from '../components/HomeScreen/HeaderHomeScreenThirdPart';
import HeaderHomeScreenFourthPart from '../components/HomeScreen/HeaderHomeScreenFourthPart';

const HomeScreen = () => {

  return (
    <div className="">
      <HeaderHomeScreen/>
      <HeaderHomeScreenSecondPart/>
      <HeaderHomeScreenThirdPart/>
      
      <HeaderHomeScreenFourthPart/>
<Footer/>



    </div>
  );
};

export default HomeScreen;
