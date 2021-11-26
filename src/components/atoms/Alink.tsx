import React, { AnchorHTMLAttributes } from 'react';

import './Alink.scss';

interface IAlinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  text: string;
  className?: string;
}

function Alink({ href, text, className }: IAlinkProps): JSX.Element {
  return (
    <a className={className} href={href}>
      {text}
    </a>
  );
}

export default Alink;
