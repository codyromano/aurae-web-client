// React & React router
import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

// Layout
import SplashScreen from './SplashScreen';
import PageWidthContainer from './PageWidthContainer';
import { GridCenter, GridRow } from './Grid';

// Graphics & animation
import SlideOutContent from './SlideOutContent';
import ShakeEffect from './ShakeEffect';
import Image from './Image';
import Vase from './Vase';

// Iteraction / customization / game mechanics
import ComponentCustomizer from './ComponentCustomizer';

// Buttons, links and typograophy
import Heading from './Heading';
import Button from './Button';
import ToolTip from './ToolTip';

// Styles
import './SkyLandingPage/SkyLandingPage.css';
import './shared-styles.css';

const URLs = {
  FOOD_INTRO: '/food',
  VASE_INTRO: '/vase',
  PICK_VASE: '/pick-vase'
};

const WeatherSplashScreen = () => (
  <SplashScreen className="sky-landing-page">
    <PageWidthContainer>
      <GridRow>
        <Heading size="extra-large">Don't let gray, rainy weather
        ruin your mood.</Heading>
      </GridRow>
      <Link to={URLs.FOOD_INTRO}>
        <Button fadeIn={true}>Cheer up</Button>
      </Link>
    </PageWidthContainer>

    <SlideOutContent>
      <Image
        height="65vw"
        width="85vw"
        src="https://i.imgur.com/uKdHTx9.png"
      />
    </SlideOutContent>
  </SplashScreen>
);

const FoodSplashScreen = () => (
  <SplashScreen
    className="food-landing-page"
  >
    <PageWidthContainer>
      <GridRow>
        <Heading size={"extra-large"} theme={"light"}>
          Treat yourself
        </Heading>
      </GridRow>
    
      <GridRow>
        <Heading size={"large"} theme={"light"}>We partner with local shops
        to give you free treats when the weather's bad.</Heading>
      </GridRow>
      
      <GridRow>
        <Link to={URLs.VASE_INTRO}>
          <ShakeEffect duration="1s">
            <Image
              height="110px"
              width="200px"
              src="https://content.mycutegraphics.com/graphics/coffee/coffee-donut.png"
            />
          </ShakeEffect>
        </Link>
      </GridRow>
    </PageWidthContainer>
  </SplashScreen>
);

const vaseOptions = [
  {
    title: 'Winter Warmth',
    description: `This vase doubles your chances
    of getting a warm pastry from a local café...
    but only when it's snowing.`,
    childComponentProps: {
      templateImage: 'https://i.imgur.com/gdcGtpr.png',
      fillTexture: 'http://lauterdaybrewers.org/wp/wp-content/uploads/2014/12/water.jpg',
      fillAnimationSpeed: 2,
      fillLevel: 50,
      width: '100px',
      height: '200px'
    }
  },
  {
    title: 'Hailstorm',
    description: 'A deluxe vase',
    childComponentProps: {
      templateImage: 'https://i.imgur.com/gdcGtpr.png',
      fillTexture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRYpKk1pWG7o1NlxY-yWi0ZlkN_IOu3IkY_AyLBA653_n_ii3jQ',
      fillAnimationSpeed: 2,
      fillLevel: 50
    }
  },
  {
    title: 'Desert',
    description: 'A deluxe vase',
    childComponentProps: {
      templateImage: 'https://i.imgur.com/gdcGtpr.png',
      fillTexture: 'https://www.sketchuptextureclub.com/public/texture/0004-water-streams-texture-seamless.jpg',
      fillAnimationSpeed: 2,
      fillLevel: 50
    }
  }
];

const IntroVaseSplashScreen = () => (
  <SplashScreen>
    <PageWidthContainer>
      <GridRow>
        <Heading>How it works</Heading>
      </GridRow>

      <GridRow>
        <GridCenter>
          <Vase
            {...vaseOptions[0].childComponentProps}
          />
        </GridCenter>
      </GridRow>
      
      <GridRow>
        <p>This is a <em>rain vase</em>. It fills
        up when there's rain in your area. Collect rain
        to unlock rewards.</p>
      </GridRow>

      <GridRow>
        <Link to={URLs.PICK_VASE}>
          <Button fadeIn={true}>
            Customize
          </Button>
        </Link>
      </GridRow>
    </PageWidthContainer>
  </SplashScreen>
);

const PickVaseSplashScreen = () => (
  <SplashScreen>
    <PageWidthContainer>
      <GridRow>
        <Heading>Pick a design</Heading>
      </GridRow>
      <GridRow>
          <ComponentCustomizer
            customOptionsLabel=""
            component={Vase}
            customOptions={vaseOptions}
          />
      </GridRow>
    </PageWidthContainer>
  </SplashScreen>
);

const App = () => (
  <HashRouter>
    <Switch>
      <Route path={URLs.PICK_VASE} component={PickVaseSplashScreen} />
      <Route path={URLs.VASE_INTRO} component={IntroVaseSplashScreen} />
      <Route path={URLs.FOOD_INTRO} component={FoodSplashScreen} />
      <Route path="/" component={WeatherSplashScreen} />
    </Switch>
  </HashRouter>
);

render(<App />, document.getElementById('root'));
