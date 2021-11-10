import React from 'react';

interface IButtonProps {
  buttonTitle: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: JSX.Element | string;
}

function Button({
  buttonTitle,
  handleClick,
  children,
}: IButtonProps): JSX.Element {
  return (
    <button type="button" title={buttonTitle} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
