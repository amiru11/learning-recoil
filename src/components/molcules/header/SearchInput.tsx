import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { getUser } from 'recoil/user';

import { Input, Button } from 'components/atoms';

function SearchInput(): JSX.Element {
  const [username, setUsername] = useState<string>('');

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleClickSumbit = (): void => {
    getUser(username);
  };

  return (
    <div className="seach-input-container">
      <GoSearch />
      <Input type="text" value={username} handleChange={handleChangeUsername} />
      <Button buttonTitle="Search" handleClick={handleClickSumbit}>
        Search
      </Button>
    </div>
  );
}

export default SearchInput;
