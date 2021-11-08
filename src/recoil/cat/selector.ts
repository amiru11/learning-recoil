import { selector } from 'recoil';

export const randomCat = selector({
  key: 'randomCat',
  get: async () => {
    const response = await fetch('https://aws.random.cat/meow');
    const data = await response.json();

    return data.file;
  },
});
