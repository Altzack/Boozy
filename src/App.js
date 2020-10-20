import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components/macro';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import Header from './containers/common/Header';
import LandingPage from './containers/LandingPage/LandingPage';
import { useResponsive } from './containers/common/responsiveComponents';
import Footer from './containers/common/Footer';
import FourOhFour from './containers/common/FourOhFour';
import { QueryParamProvider } from 'use-query-params';
import About from './containers/About/About';
import GetStarted from './containers/GetStarted/GetStarted';
import config from './config';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: rgba(232, 230, 227, 0.85);
  background-color: rgb(24, 26, 27);
  ${({ isMobile }) => isMobile && 'overflow-x: hidden;'}
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding-top: 64px;
  min-height: 100vh;
`;

const AppWrapper = withRouter(({ children }) => {
  const { isTabletOrMobile } = useResponsive();
  return (
    <AppContainer isMobile={isTabletOrMobile}>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </AppContainer>
  );
});

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <QueryParamProvider ReactRouterRoute={Route}>
            <AppWrapper>
              <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/getstarted">
                  <GetStarted />
                </Route>
                <Route>
                  <FourOhFour />
                </Route>
              </Switch>
            </AppWrapper>
          </QueryParamProvider>
        </Router>
      </>
    );
  }
}

export default App;
