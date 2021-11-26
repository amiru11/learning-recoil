import React, { Suspense } from 'react';

import './HomeTemplate.scss';

import { Header, UserSection, PlaceholderSection } from 'components/organisms';

function HomeTemplate(): JSX.Element {
  return (
    <div className="home-container">
      <Header />
      <Suspense fallback={<PlaceholderSection />}>
        <UserSection />
        <PlaceholderSection />
      </Suspense>
    </div>
  );
}

export default HomeTemplate;
