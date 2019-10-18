import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faMapMarkedAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(
  faThumbsUp, // thumbs up on media
  faMapMarkedAlt, // place_name on media
  faEnvelope // Footer
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
