import apiRequest from 'lib/request';

export const getUserByName = (userName: string) =>
  apiRequest({
    url: `users/${userName}`,
    method: 'GET',
  });
