import apiRequest from 'lib/request';
import type { AxiosPromise } from 'axios';
import type { IUser } from 'interfaces';

export const getUserByName = (userName: string): AxiosPromise<IUser> =>
  apiRequest({
    url: `users/${userName}`,
    method: 'GET',
  });
