import React, { HTMLAttributes } from 'react';

interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  className: string;
}

function Paragraph({ text, className }: IParagraphProps): JSX.Element {
  return <p className={className}>{text}</p>;
}

export default Paragraph;
