import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faQuoteLeft, faQuoteRight, faMapMarkedAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import App from './components/App/App';
import './index.css';

library.add(
    faThumbsUp, // thumbs up on media
    faQuoteLeft, // Quotes on media
    faQuoteRight,
    faMapMarkedAlt, // place_name on media
    faGithub, // Footer
    faAt // Footer
);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);
