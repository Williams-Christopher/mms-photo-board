import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faMapMarkedAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

library.add(
  faThumbsUp, // thumbs up on media
  faMapMarkedAlt, // place_name on media
  faEnvelope // Footer
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
