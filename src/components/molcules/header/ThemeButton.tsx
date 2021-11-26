import React from 'react';
import { useRecoilState } from 'recoil';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

import { themeTypeAtom } from 'state/user';

import { THEME_TYPE } from 'contants';
import { addClassToBody, removeClassToBody } from 'utils/dom-handler';

import './ThemeButton.scss';

import { Button } from 'components/atoms';

const { LIGHT, DARK } = THEME_TYPE;

function ThemeButton(): JSX.Element {
  const [themeType, setThemeType] = useRecoilState(themeTypeAtom);

  const handleThemeChangeHandler = (): void => {
    setThemeType((themeType) => (themeType === DARK ? LIGHT : DARK));
    switch (themeType) {
      case LIGHT: {
        addClassToBody(DARK);
        removeClassToBody(LIGHT);
        break;
      }
      case DARK: {
        addClassToBody(LIGHT);
        removeClassToBody(DARK);
        break;
      }
      default:
        break;
    }
  };
  return (
    <Button
      className="theme-button"
      buttonTitle="theme Mode change"
      handleClick={handleThemeChangeHandler}
    >
      <>
        {themeType === LIGHT && (
          <>
            <span className="title">{DARK}</span>
            <MdDarkMode size={15} color="#000000" />
          </>
        )}
        {themeType === DARK && (
          <>
            <span className="title">{LIGHT}</span>
            <MdLightMode size={15} color="#ffffff" />
          </>
        )}
      </>
    </Button>
  );
}

export default ThemeButton;
