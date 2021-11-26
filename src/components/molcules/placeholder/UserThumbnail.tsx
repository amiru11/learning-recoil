import React from 'react';
import { Skeleton } from 'components/atoms';

function UserThumbnailPlaceHolder(): JSX.Element {
  return (
    <div className="image-container">
      <Skeleton animation circle height={150} />
    </div>
  );
}

export default UserThumbnailPlaceHolder;
