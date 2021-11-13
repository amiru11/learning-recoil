import React from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

import './ThemeButton.scss';

import { Button } from 'components/atoms';

function ThemeButton(): JSX.Element {
  return (
    <Button
      className="theme-button"
      buttonTitle="theme Changer"
      handleClick={() => {}}
    >
      <span>Light</span>
      <MdOutlineLightMode size={15} />
    </Button>
  );
}

export default ThemeButton;
