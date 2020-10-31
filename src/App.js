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
import DrinkPage from './containers/Drinks/DrinkPage';
import config from './config';
import AppContext from './AppContext';
import DrinkInfoPage from './containers/DrinkInfoPage/DrinkInfoPage';
import AddDrink from './containers/AddDrink/AddDrink';
import EditDrink from './containers/EditDrink/EditDrink';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: rgba(232, 230, 227, 0.85);
  background-color: rgb(24, 26, 27);
  ${({ isMobile }) => isMobile && 'overflow-x: hidden;'}
  max-width: 100%;
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
  constructor(props) {
    super(props);
    this.state = { drinks: [] };
  }

  setDrinks = (drinks) => {
    this.setState({
      drinks,
      error: null,
    });
  };

  getDrinks = () => {
    fetch(`${config.API_ENDPOINT}/drinks/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setDrinks)
      .catch((error) => this.setState({ error }));
  };

  componentDidMount() {
    this.getDrinks();
  }

  addDrink = (drink) => {
    this.setState({
      drinks: [...this.state.drinks, drink],
    });
  };

  deleteDrink = (id) => {
    let newDrinks = this.state.drinks.filter((d) => d.id !== id);
    this.setState({
      drinks: newDrinks,
    });
  };

  render() {
    const contextValues = {
      drinks: this.state.drinks || [],
      addDrink: this.addDrink,
      deleteDrink: this.deleteDrink,
      getDrinks: this.getDrinks,
    };
    return (
      <AppContext.Provider value={contextValues}>
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
                  <Route
                    exact
                    path="/drinks"
                    render={(props) => <DrinkPage {...props} />}
                  />
                  <Route
                    path="/drinks/:drinkId"
                    render={(props) => <DrinkInfoPage {...props} />}
                  />
                  <Route
                    path="/AddDrink"
                    render={(props) => <AddDrink {...props} />}
                  />
                  <Route
                    path="/EditDrink/:drinkId"
                    render={(props) => <EditDrink {...props} />}
                  />
                  <Route>
                    <FourOhFour />
                  </Route>
                </Switch>
              </AppWrapper>
            </QueryParamProvider>
          </Router>
        </>
      </AppContext.Provider>
    );
  }
}

export default App;
