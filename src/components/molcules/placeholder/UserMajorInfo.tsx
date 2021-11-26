import React from 'react';

import { Skeleton } from 'components/atoms';

function UserMajorInfoPlaceholder(): JSX.Element {
  return (
    <div className="major-info-container">
      <ul className="info-list">
        <li className="info-list-item">
          <Skeleton count={6} rounded />
          <Skeleton count={10} rounded />
        </li>
        <li className="info-list-item">
          <Skeleton count={6} rounded />
          <Skeleton count={10} rounded />
        </li>
        <li className="info-list-item">
          <Skeleton count={6} rounded />
          <Skeleton count={10} rounded />
        </li>
      </ul>
    </div>
  );
}

export default UserMajorInfoPlaceholder;
