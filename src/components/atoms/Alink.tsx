import React from 'react';

import './Alink.scss';

interface IAlinkProps {
  href: string;
  text: string;
  className?: string;
}

function Alink({ href, text, className }: IAlinkProps) {
  return (
    <a className={className} href={href}>
      {text}
    </a>
  );
}

export default Alink;
