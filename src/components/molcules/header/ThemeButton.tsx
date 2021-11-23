import React from 'react';
import { useRecoilState } from 'recoil';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

import { themeTypeAtom } from 'state/user';
import { THEME_TYPE } from 'contants';

import './ThemeButton.scss';

import { Button } from 'components/atoms';

const { LIGHT, DARK } = THEME_TYPE;

function ThemeButton(): JSX.Element {
  const [themeType, setThemeType] = useRecoilState(themeTypeAtom);

  const handleThemeChangeHandler = (): void => {
    setThemeType((themeType) => (themeType === DARK ? LIGHT : DARK));
  };
  return (
    <Button
      className="theme-button"
      buttonTitle="theme Changer"
      handleClick={handleThemeChangeHandler}
    >
      {themeType === LIGHT ? (
        <>
          <span>{DARK}</span>
          <MdOutlineDarkMode size={15} color="#000000" />
        </>
      ) : (
        <>
          <span>{LIGHT}</span>
          <MdOutlineLightMode size={15} color="#ffffff" />
        </>
      )}
    </Button>
  );
}

export default ThemeButton;
