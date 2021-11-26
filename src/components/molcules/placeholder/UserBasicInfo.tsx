import React from 'react';

import { Skeleton } from 'components/atoms';
import { UserThumbnailPlaceHolder } from 'components/molcules';

function UserBasicInfoPlaceholder(): JSX.Element {
  return (
    <section className="basic-info-container">
      <div className="user-thumbnail-wrap">
        <UserThumbnailPlaceHolder />
      </div>
      <div className="info-wrap">
        <div className="title-wrap">
          <Skeleton count={6} rounded height={28} />
          <Skeleton count={10} rounded height={16} />
        </div>
        <div className="date-wrap">
          <Skeleton count={10} rounded height={20} />
        </div>
        <div className="bio-wrap">
          <Skeleton count={10} rounded height={20} />
        </div>
      </div>
      <div className="bio-wrap mobile">
        <Skeleton count={10} rounded height={20} />
      </div>
    </section>
  );
}

export default UserBasicInfoPlaceholder;
