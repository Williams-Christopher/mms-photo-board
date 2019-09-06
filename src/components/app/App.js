import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../navigation/navigation';

function App() {
  return (
    <>
        <header className='App'>
            <Header />
        </header>
        <main role="main">
          <p>Main content placeholder</p>
        </main>
    </>
  );
}

export default App;
