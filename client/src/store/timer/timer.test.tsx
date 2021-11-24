import reducer, { reset, setTime } from './index';

describe('[Store - timer]', () => {
  it('[store:timer] - reset 초기화', () => {
    expect(reducer(undefined, reset())).toEqual({
      time: 0,
    });
  });

  it('[store:timer] - 10초 세팅', () => {
    expect(reducer(undefined, setTime(10))).toEqual({
      time: 10,
    });
  });

  // it('[store:timer] - dispatch 10초 세팅', () => {
  //   store.dispatch(setTime(10));
  //
  //   const state = store.getState().timeSlice.time;
  //   expect(state).toEqual(10);
  // });
});
