import React from 'react';

interface IParagraphProps {
  text: string;
  className: string;
}

function Paragraph({ text, className }: IParagraphProps) {
  return <p className={className}>{text}</p>;
}

export default Paragraph;
