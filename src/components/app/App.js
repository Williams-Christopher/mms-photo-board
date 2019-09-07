import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import AboutPage from '../../routes/AboutPage/AboutPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import FourOhFourPage from '../../routes/FourOhFourPage/FourOhFourPage';

function App() {
  return (
    <>
        <Navigation />
        {/* <header className='App'>
        </header> */}
        <main role="main">
          <Switch>
            <Route path='/About' component={AboutPage} />
            <Route path='/Login' component={LoginPage} />
            <Route path='/SignUp' component={RegisterPage} />
            <Route component={FourOhFourPage} />
          </Switch>
        </main>
        <Footer />
    </>
  );
}

export default App;
