import React from 'react';

interface IHeadTextProps {
  size: string;
  text: string;
  className?: string;
}

function HeadText({ size, text, className }: IHeadTextProps): JSX.Element {
  if (size === 'h1') {
    return <h1 className={className}>{text}</h1>;
  }
  if (size === 'h2') {
    return <h2 className={className}>{text}</h2>;
  }

  return <h3 className={className}>{text}</h3>;
}

export default HeadText;
