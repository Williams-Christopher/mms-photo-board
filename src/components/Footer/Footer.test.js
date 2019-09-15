import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faQuoteLeft, faQuoteRight, faMapMarkedAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';

library.add(
  faThumbsUp, // thumbs up on media
  faQuoteLeft, // Quotes on media
  faQuoteRight,
  faMapMarkedAlt, // place_name on media
  faGithub, // Footer
  faAt // Footer
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
