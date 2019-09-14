import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import MediaPage from './MediaPage';

const history = {
    createHref: jest.fn(),
    listen: jest.fn(),
    location: {
        pathname: '/',
    }
};

const testMedia = [
  {
      id: 1,
      url: "https://picsum.photos/400",
      caption: "A beautiful image from the south of France",
      place_name: "France",
      date_created: "2019-09-07T08:30:00.000Z",
      likes: 5,
  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <Router history={history}>
            <MediaPage media={testMedia} />
        </Router>
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
