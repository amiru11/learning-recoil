import React from 'react';
import { HeadText, Paragraph, Alink } from 'components/atoms';
import { formatDate } from 'utils/date';

interface IUserBasicInfoProps {
  name: string;
  login: string;
  createdAt: string;
  htmlUrl: string;
  bio?: string;
}

function UserBasicInfo({
  name,
  login,
  createdAt,
  htmlUrl,
  bio,
}: IUserBasicInfoProps): JSX.Element {
  return (
    <section className="basic-info-container">
      <div className="title-wrap">
        <HeadText className="title" size="h2" text={name} />
        <Paragraph className="date" text={formatDate(createdAt, '-')} />
      </div>
      <div className="title-wrap">
        <Alink href={htmlUrl} text={`@${login}`} />
      </div>
      <div className="title-wrap">
        <Paragraph className="bio" text={bio || ''} />
      </div>
    </section>
  );
}

export default UserBasicInfo;
