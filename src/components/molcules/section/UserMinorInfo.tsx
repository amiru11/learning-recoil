import React from 'react';
import { GoLocation, GoLink, GoBriefcase } from 'react-icons/go';
import { CgTwitter } from 'react-icons/cg';

import { Alink } from 'components/atoms';

interface IUserMinorInfoProps {
  location: string;
  twitterUsername: string;
  blog: string;
  company: string;
}

function UserMinorInfo({
  location,
  twitterUsername,
  blog,
  company,
}: IUserMinorInfoProps): JSX.Element {
  return (
    <div className="minor-info-container">
      <ul>
        <li>
          <GoLocation />
          <span>{location}</span>
        </li>
        <li>
          <CgTwitter />
          <span>{twitterUsername}</span>
        </li>
        <li>
          <GoLink />
          <Alink href={blog} text={blog} />
        </li>
        <li>
          <GoBriefcase />
          <span>{company}</span>
        </li>
      </ul>
    </div>
  );
}

export default UserMinorInfo;
