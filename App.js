import React from 'react';
import { Root } from 'native-base';
import { Scene, Router } from 'react-native-router-flux';

// Our components
import Home from './scenes/Home';
import FooterNavbar from './components/FooterNav';

// Topmost component in the application
export default () => (
  <Root>
    <Router>
      <Scene key="root">
        <Scene key="home" initial component={Home} />
        <Scene key="login" component={Home} title="Login" />
        <Scene key="register" component={Home} title="Register" />
      </Scene>
    </Router>
    <FooterNavbar />
  </Root>
);
