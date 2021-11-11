import React from 'react';
import { HeadText } from 'components/atoms';
import { ThemeButton, SearchInput } from 'components/molcules';

function Header() {
  return (
    <header className="header">
      <nav>
        <HeadText className="title" size="h2" text="devfinder" />;
        <ThemeButton />
      </nav>
      <div className="search-input-wrap">
        <SearchInput />
      </div>
    </header>
  );
}

export default Header;
