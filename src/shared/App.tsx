import React from 'react';
import './App.scss';

import Router from 'shared/Router';

function App(): JSX.Element {
  return (
    <main className="main-container">
      <Router />
    </main>
  );
}

export default App;
