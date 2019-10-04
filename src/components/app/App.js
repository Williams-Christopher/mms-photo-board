import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import ApiServices from '../../services/api-service';
import TokenServices from '../../services/token-services';
import { Error } from '../../services/utils';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import About from '../../components/About/About';
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

  updateLikeCount = (mediaId, newLikeCount) => {
    const targetMedia = this.state.media.find(item => item.id === mediaId);
    targetMedia.likes = newLikeCount;
    this.setState({media: [...this.state.media], targetMedia})
  }

  render() {
    const contextValue = {
      media: this.state.media,
      isLoggedIn: this.state.isLoggedIn,
      setLoginState: this.setLoginStateValue,
      updateLikeCount: this.updateLikeCount,
    };

    return (
      <>
        <main role="main">
          <AppContext.Provider value={contextValue}>
          <Navigation isLoggedIn={this.state.isLoggedIn} />
          <Error error={this.state.error} />
          <Switch>
            
            <Route
              exact
              path='/'
              component={MediaPage}
              />}
            />
            
            <Route
              path='/About'
              component={About}
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
