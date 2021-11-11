import React from 'react';
import { Button } from 'components/atoms';
import { UserThumbnail, SearchInput } from 'components/molcules';

function Home(): JSX.Element {
  return (
    <div className="home-container">
      <header>
        <h2>devfinder</h2>
        <div className="button-wrap">
          <Button buttonTitle="theme-change" handleClick={() => {}}>
            Light
          </Button>
        </div>
      </header>

      {/* <section></section> */}
    </div>
  );
}
export default Home;
