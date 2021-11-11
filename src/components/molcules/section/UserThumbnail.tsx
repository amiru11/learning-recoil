import React from 'react';
import { Img } from 'components/atoms';

interface IUserThumbnailProps {
  tag: string;
  nickname: string;
  avatarUrl: string;
}

function UserThumbnail({
  tag,
  nickname,
  avatarUrl,
}: IUserThumbnailProps): JSX.Element {
  return (
    <div className="image-container">
      <Img imageUrl={avatarUrl} imageAlt={`${nickname} @${tag}`} />
    </div>
  );
}

export default UserThumbnail;
