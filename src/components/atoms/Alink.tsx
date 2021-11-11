import React from 'react';

interface IAlinkProps {
  href: string;
  text: string;
}

function Alink({ href, text }: IAlinkProps) {
  return <a href={href}>{text}</a>;
}

export default Alink;
