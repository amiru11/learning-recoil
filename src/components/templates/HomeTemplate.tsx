import React from 'react';

import './HomeTemplate.scss';

import { Header, UserSection } from 'components/organisms';

function HomeTemplate(): JSX.Element {
  return (
    <div className="home-container">
      <Header />
      <UserSection />
    </div>
  );
}

export default HomeTemplate;
