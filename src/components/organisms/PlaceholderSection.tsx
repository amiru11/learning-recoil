import React from 'react';

import {
  UserBasicInfoPlaceHolder,
  UserMajorInfoPlaceHolder,
  UserMinorInfoPlaceHolder,
} from 'components/molcules';

function PlaceholderSection(): JSX.Element {
  return (
    <div className="user-section-container">
      <div className="user-info-wrap">
        <UserBasicInfoPlaceHolder />
        <UserMajorInfoPlaceHolder />
        <UserMinorInfoPlaceHolder />
      </div>
    </div>
  );
}

export default PlaceholderSection;
