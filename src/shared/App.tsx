import React from 'react';
import './App.scss';

import Router from 'shared/Router';

function App(): JSX.Element {
  return (
    <div className="main-container">
      <Router />
    </div>
  );
}

export default App;
