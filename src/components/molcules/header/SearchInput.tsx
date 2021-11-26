import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { GoSearch } from 'react-icons/go';
import { keywordAtom } from 'state/user';

import './SearchInput.scss';

import { Input, Button } from 'components/atoms';

function SearchInput(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const setKeyword = useSetRecoilState(keywordAtom);

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleClickSumbit = (): void => {
    setKeyword(!username ? 'octocat' : username);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClickSumbit();
      event.preventDefault();
    }
  };

  return (
    <div className="search-input-container">
      <GoSearch color="#0378fe" size={20} />
      <Input
        type="text"
        value={username}
        handleChange={handleChangeUsername}
        handleKeyDown={handleKeyDown}
        placeholder="Search GitHub username.."
      />
      <Button
        className="search-button"
        buttonTitle="Search"
        handleClick={handleClickSumbit}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchInput;
