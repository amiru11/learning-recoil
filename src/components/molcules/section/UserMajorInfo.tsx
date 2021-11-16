import React from 'react';

import './UserMajorInfo.scss';

import { HeadText, Paragraph } from 'components/atoms';

interface IUserMajorInfoProps {
  repositoryCount: number;
  followers: number;
  following: number;
}

function UserMajorInfo({
  repositoryCount,
  followers,
  following,
}: IUserMajorInfoProps): JSX.Element {
  return (
    <div className="major-info-container">
      <ul className="info-list">
        <li className="info-list-item">
          <Paragraph className="title" text="Repos" />
          <HeadText className="desc" size="h2" text={`${repositoryCount}`} />
        </li>
        <li className="info-list-item">
          <Paragraph className="title" text="Followers" />
          <HeadText className="desc" size="h2" text={`${followers}`} />
        </li>
        <li className="info-list-item">
          <Paragraph className="title" text="Following" />
          <HeadText className="desc" size="h2" text={`${following}`} />
        </li>
      </ul>
    </div>
  );
}

export default UserMajorInfo;
