import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

import RandomCat from './components/RandomCat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense fallback={<div>loading...</div>}>
          <RandomCat />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
