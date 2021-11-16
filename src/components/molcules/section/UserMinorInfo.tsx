import React from 'react';
import { GoLocation, GoLink, GoBriefcase } from 'react-icons/go';
import { CgTwitter } from 'react-icons/cg';

import './UserMinorInfo.scss';

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
      <ul className="icon-list">
        <li className="icon-list-item">
          <GoLocation size="16" color="#ffffff" />
          <span className="desc">{location}</span>
        </li>
        <li className="icon-list-item">
          <CgTwitter size="16" color="#ffffff" />
          <span className="desc">{twitterUsername}</span>
        </li>
        <li className="icon-list-item">
          <GoLink size="16" color="#ffffff" />
          <Alink className="desc" href={blog} text={blog} />
        </li>
        <li className="icon-list-item">
          <GoBriefcase size="16" color="#ffffff" />
          <span className="desc">{company}</span>
        </li>
      </ul>
    </div>
  );
}

export default UserMinorInfo;
