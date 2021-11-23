import { selector } from 'recoil';
import { keywordAtom } from '.';
import { getUserByName } from '../../api/user';

export const getUser = selector({
  key: 'user',
  get: async ({ get }) => {
    try {
      const userName = get(keywordAtom);
      if (!userName) return null;
      const { data } = await getUserByName(userName);
      // userProperty 가공하기
      return data;
    } catch (err) {
      return null;
    }
  },
});
