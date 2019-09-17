import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import ApiServices from '../../services/api-service';
import TokenServices from '../../services/token-services';
import { Error } from '../../services/utils';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import AboutPage from '../../routes/AboutPage/AboutPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import MediaPage from '../../routes/MediaPage/MediaPage';
import FourOhFourPage from '../../routes/FourOhFourPage/FourOhFourPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [],
      isLoggedIn: false,
    }
  }

  componentDidMount() {
    this.setState({isLoggedIn: TokenServices.hasToken()});
    ApiServices.getMedia()
      .then(jsonMedia => {
        this.setState({media: jsonMedia});
      })
      .catch(error => this.setState({error: error.message}));
  }

  setLoginStateValue = () => {
    this.setState({isLoggedIn: TokenServices.hasToken()});
  }

  render() {
    const contextValue = {
      media: this.state.media,
      isLoggedIn: this.state.isLoggedIn,
      setLoginState: this.setLoginStateValue,
    };

    return (
      <>

        {/* <header className='App'>
        </header> */}
        <main role="main">
          <Error error={this.state.error} />
          <AppContext.Provider value={contextValue}>
          <Navigation isLoggedIn={this.state.isLoggedIn} />
          <Switch>
            
            <Route
              exact
              path='/'
              // render={props => <MediaPage {...props} media={staticTestData.media}
              component={MediaPage}
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
              render={componentProps => (
                TokenServices.hasToken()
                ? <Redirect to={'/'} />
                : <RegisterPage {...componentProps}/>
              )}
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
