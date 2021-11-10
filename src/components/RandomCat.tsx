import React from 'react';
import { useRecoilValue } from 'recoil';
import { randomCat } from '../recoil/cat';

export default function RandomCat(): JSX.Element {
  const photoUrl = useRecoilValue(randomCat);
  return (
    <div className="random-cat">
      <img src={photoUrl} alt="random cat" />
    </div>
  );
}
