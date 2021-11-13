import React, { Suspense } from 'react';

import './HomeTemplate.scss';

import { Header, UserSection } from 'components/organisms';

function HomeTemplate(): JSX.Element {
  return (
    <div className="home-container">
      <Header />
      <Suspense fallback={<></>}>
        <UserSection />
      </Suspense>
    </div>
  );
}

export default HomeTemplate;
