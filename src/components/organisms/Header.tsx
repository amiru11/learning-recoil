import React from 'react';
import { HeadText } from 'components/atoms';

import './Header.scss';

import { ThemeButton, SearchInput } from 'components/molcules';

function Header(): JSX.Element {
  return (
    <header className="header">
      <nav>
        <HeadText className="title" size="h2" text="devfinder" />
        <ThemeButton />
      </nav>
      <div className="search-input-wrap">
        <SearchInput />
      </div>
    </header>
  );
}

export default Header;
