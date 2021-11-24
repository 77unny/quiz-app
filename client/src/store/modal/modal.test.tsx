import reducer, { reset, setIsOpen } from './index';

describe('[Store - modal]', () => {
  it('[store:modal] - reset 초기화', () => {
    expect(reducer(undefined, reset())).toEqual({
      isOpen: false,
    });
  });

  it('[store:modal] - modal open', () => {
    expect(reducer(undefined, setIsOpen(true))).toEqual({
      isOpen: true,
    });
  });
});
