import React from 'react';

import { Skeleton } from 'components/atoms';

function UserMinorInfoPlaceholder(): JSX.Element {
  return (
    <div className="minor-info-container">
      <ul className="icon-list">
        <li className="icon-list-item">
          <Skeleton count={10} rounded />
        </li>
        <li className="icon-list-item">
          <Skeleton count={10} rounded />
        </li>
        <li className="icon-list-item">
          <Skeleton count={10} rounded />
        </li>
        <li className="icon-list-item">
          <Skeleton count={10} rounded />
        </li>
      </ul>
    </div>
  );
}

export default UserMinorInfoPlaceholder;
