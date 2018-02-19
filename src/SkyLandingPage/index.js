import React from 'react';
import { render } from 'react-dom';
import SlideOutContent from '../SlideOutContent';
import SplashScreen from '../SplashScreen';
import './SkyLandingPage.css';

const Clouds = () => (
  <div className="clouds"></div>
);

const SkyLandingPage = ({ children }) => (
  <SplashScreen className="sky-landing-page">
    {children}
    <SlideOutContent>
      <Clouds />
    </SlideOutContent>
  </SplashScreen>
);

export default SkyLandingPage;
