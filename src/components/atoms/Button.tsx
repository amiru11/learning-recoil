import React from 'react';

interface IButtonProps {
  buttonTitle: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: JSX.Element[] | JSX.Element | string;
  className: string;
}

function Button({
  buttonTitle,
  handleClick,
  children,
  className,
}: IButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={className}
      title={buttonTitle}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
