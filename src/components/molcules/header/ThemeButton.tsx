import React from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

import { Button } from 'components/atoms';

function ThemeButton() {
  return (
    <Button buttonTitle="theme Changer" handleClick={() => {}}>
      <span>Light</span>
      <MdOutlineLightMode />
    </Button>
  );
}

export default ThemeButton;
