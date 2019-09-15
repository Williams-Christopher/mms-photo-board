import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import ApiServices from '../../services/api-service';
import { Error } from '../../services/utils';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import AboutPage from '../../routes/AboutPage/AboutPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import MediaPage from '../../routes/MediaPage/MediaPage';
import FourOhFourPage from '../../routes/FourOhFourPage/FourOhFourPage';

import staticTestData from '../../static_test_data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [],
    }
  }

  componentDidMount() {
    ApiServices.getMedia()
      .then(jsonMedia => {
        this.setState({media: jsonMedia});
      })
      .catch(error => this.setState({error: error.message}));
  }

  render() {
    const contextValue = {
      media: this.state.media,
    }

    return (
      <>
        <Navigation />
        {/* <header className='App'>
        </header> */}
        <main role="main">
          <Error error={this.state.error} />
          <AppContext.Provider value={contextValue}>
          <Switch>
            <Route
              exact
              path='/'
              render={props => <MediaPage {...props} media={staticTestData.media}
              />}
            />
            <Route
              path='/About'
              component={AboutPage}
            />
            <Route
              path='/Login'
              component={LoginPage}
            />
            <Route
              path='/SignUp'
              component={RegisterPage}
            />
            <Route
              component={FourOhFourPage}
            />
          </Switch>
          </AppContext.Provider>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
