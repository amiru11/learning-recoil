const BODY = 'body';

type TElement = Element | null;

export const getElement = (selector: string): TElement =>
  document.querySelector(selector);
export const addClass = (element: TElement, className: string): void =>
  element?.classList.add(className);
export const removeClass = (element: TElement, className: string): void =>
  element?.classList.remove(className);
export const hasClass = (element: TElement, className: string) =>
  element?.classList.contains(className);
export const getBody = (): TElement => getElement(BODY);
export const addClassToBody = (className: string) =>
  addClass(getBody(), className);
export const removeClassToBody = (className: string) =>
  removeClass(getBody(), className);
export const hasClassOfBody = (className: string) =>
  hasClass(getBody(), className);
