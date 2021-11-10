import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} caseSensitive />
      <Route path="*" element={<p>There's nothing here!</p>} />
    </Routes>
  );
}

export default Router;
