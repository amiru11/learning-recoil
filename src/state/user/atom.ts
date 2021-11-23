import { atom } from 'recoil';
import { THEME_TYPE } from 'contants';

const { LIGHT } = THEME_TYPE;
/**
 * Atom
 * Recoil의 단위 데이터이다. 스토어에 저장되고 추출되는 데이터는 모두 Atom을 기반
 * atom() 함수에 고유한 키(key)와 기본값(default)을 전달해서 작성
 * key는 unique하며 문자열이다.
 */
export const userAtom = atom({
  key: 'userAtom',
  default: null,
});

export const keywordAtom = atom({
  key: 'keywordAtom',
  default: 'octocat',
});

export const themeTypeAtom = atom({
  key: 'themeTypeAtom',
  default: LIGHT,
});
