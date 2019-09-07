import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import About from '../About/About';
import LoginPage from '../../routes/LoginPage/LoginPage';
import FourOhFourPage from '../../routes/FourOhFourPage/FourOhFourPage';

function App() {
  return (
    <>
        <Navigation />
        {/* <header className='App'>
        </header> */}
        <main role="main">
          <Switch>
            <Route path='/About' component={About} />
            <Route path='/Login' component={LoginPage} />
            <Route component={FourOhFourPage} />
          </Switch>
        </main>
        <Footer />
    </>
  );
}

export default App;
