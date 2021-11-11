import React from 'react';
import { HeadText } from 'components/atoms';
import { UserThumbnail } from 'components/molcules';

function UserSection() {
  return (
    <div className="user-section-container">
      <div className="user-thumbnail-wrap">
        <UserThumbnail />
      </div>
      <div className="user-info-wrap"></div>
    </div>
  );
}

export default UserSection;
