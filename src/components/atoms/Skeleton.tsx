import React, { HTMLAttributes, useMemo } from 'react';

import './Skeleton.scss';

interface ISkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  circle?: boolean;
  rounded?: boolean;
  count?: number;
  animation?: boolean;
  height?: number;
}

function Skeleton({
  circle,
  rounded,
  count,
  animation = true,
  height,
  children,
}: ISkeletonProps): JSX.Element {
  const content = useMemo(
    () => [...Array(count)].map(() => '-').join(''),
    [count]
  );

  return (
    <span
      className={`skeleton-base${circle ? ' circle' : ''}${
        rounded ? ' rounded' : ''
      }${animation ? ' animation' : ''}`}
      style={{ height: height ?? 'auto' }}
    >
      <span className="skeleton-content">{children || content}</span>
    </span>
  );
}

export default Skeleton;
