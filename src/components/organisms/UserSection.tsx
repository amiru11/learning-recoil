import React from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import { getUser } from 'state/user';

import { LOADABLE_STATUS } from 'contants';
import { IUser } from 'interfaces';

import './UserSection.scss';

import {
  UserThumbnail,
  UserBasicInfo,
  UserMajorInfo,
  UserMinorInfo,
} from 'components/molcules';

function UserSection(): JSX.Element {
  const userInfo = useRecoilValue(getUser);
  console.log(userInfo);
  // if (userInfoLoadable.state === LOADABLE_STATUS.LOADING) {
  //   return <>loading</>;
  // }

  // if (userInfoLoadable.state === LOADABLE_STATUS.ERROR) {
  //   return userInfoLoadable.contents;
  // }

  // if (userInfoLoadable.state === LOADABLE_STATUS.SUCCESS) {
  //   const userInfo: IUser = userInfoLoadable.contents;

  // }

  if (!userInfo) {
    return <></>;
  }

  return (
    <div className="user-section-container">
      <div className="user-thumbnail-wrap">
        <UserThumbnail
          avatarUrl={userInfo?.avatar_url}
          nickname={userInfo?.name ?? ''}
          tag={`${userInfo.login}`}
        />
      </div>
      <div className="user-info-wrap">
        <UserBasicInfo
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
          location={userInfo.location}
          twitterUsername={userInfo?.twitter_username ?? ''}
          blog={userInfo?.blog ?? ''}
          company={userInfo?.company ?? ''}
        />
      </div>
    </div>
  );
}

export default UserSection;
