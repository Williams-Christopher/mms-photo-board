import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import AboutPage from './AboutPage';

const history = {
    createHref: jest.fn(),
    listen: jest.fn(),
    location: {
        pathname: '/',
    }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <Router history={history}>
            <AboutPage />
        </Router>
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
