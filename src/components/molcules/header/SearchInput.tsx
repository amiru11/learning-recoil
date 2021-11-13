import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { GoSearch } from 'react-icons/go';
import { keywordAtom } from 'state/user';

import './SearchInput.scss';

import { Input, Button } from 'components/atoms';

function SearchInput(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [keyword, setKeyword] = useRecoilState(keywordAtom);

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleClickSumbit = (): void => {
    if (!username) return;
    console.log('username', username);
    setKeyword(username);
  };

  return (
    <div className="search-input-container">
      <GoSearch color="#0378fe" size={20} />
      <Input type="text" value={username} handleChange={handleChangeUsername} />
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
