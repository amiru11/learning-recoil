import React from 'react';
import { useRecoilValue } from 'recoil';

import { getUser } from 'state/user';

import './UserSection.scss';

import {
  UserBasicInfo,
  UserMajorInfo,
  UserMinorInfo,
} from 'components/molcules';

function UserSection(): JSX.Element {
  const userInfo = useRecoilValue(getUser);

  if (!userInfo) {
    return <></>;
  }

  return (
    <div className="user-section-container">
      <div className="user-info-wrap">
        <UserBasicInfo
          avatar_url={userInfo?.avatar_url ?? ''}
          name={userInfo?.name ?? ''}
          login={userInfo?.login ?? ''}
          createdAt={`${userInfo?.created_at ?? ''}`}
          htmlUrl={userInfo?.html_url ?? ''}
          bio={userInfo?.bio ?? ''}
        />
        <UserMajorInfo
          repositoryCount={userInfo?.public_repos ?? 0}
          followers={userInfo?.followers ?? 0}
          following={userInfo?.following ?? 0}
        />
        <UserMinorInfo
          location={userInfo?.location ?? 'Not Available'}
          twitterUsername={userInfo?.twitter_username ?? 'Not Available'}
          blog={userInfo?.blog ?? 'Not Available'}
          company={userInfo?.company ?? 'Not Available'}
        />
      </div>
    </div>
  );
}

export default UserSection;
