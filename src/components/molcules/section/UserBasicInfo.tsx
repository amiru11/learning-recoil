import React from 'react';
import { formatDate } from 'utils/date';

import './UserBasicInfo.scss';

import { HeadText, Paragraph, Alink } from 'components/atoms';
import { UserThumbnail } from 'components/molcules';

interface IUserBasicInfoProps {
  avatar_url: string;
  name: string;
  login: string;
  createdAt: string;
  htmlUrl: string;
  bio?: string;
}

function UserBasicInfo({
  avatar_url,
  name,
  login,
  createdAt,
  htmlUrl,
  bio,
}: IUserBasicInfoProps): JSX.Element {
  return (
    <section className="basic-info-container">
      <div className="user-thumbnail-wrap">
        <UserThumbnail
          avatarUrl={avatar_url}
          nickname={name ?? ''}
          tag={`${login}`}
        />
      </div>
      <div className="info-wrap">
        <div className="title-wrap">
          <HeadText className="title" size="h2" text={name} />
          <Alink href={htmlUrl} text={`@${login}`} />
        </div>
        <div className="date-wrap">
          <Paragraph
            className="date"
            text={`Joined ${formatDate(createdAt)}`}
          />
        </div>
        <div className="bio-wrap">
          <Paragraph
            className="bio"
            text={bio || '아직 등록된 bio 정보가 없습니다.'}
          />
        </div>
      </div>
      <div className="bio-wrap mobile">
        <Paragraph
          className="bio"
          text={bio || '아직 등록된 bio 정보가 없습니다.'}
        />
      </div>
    </section>
  );
}

export default UserBasicInfo;
