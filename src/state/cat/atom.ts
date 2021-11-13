import { atom } from 'recoil';

const catAtom = atom({
  key: 'cat',
  default: '',
});

export default catAtom;
