import reducer, { reset, setAnswer, setDifficulty, setIsPlaying, setQuestions, setRestart, setStep } from './index';

describe('[Store - quiz]', () => {
  it('[store:quiz] - reset 초기화', () => {
    expect(reducer(undefined, reset())).toEqual({
      isOpen: false,
    });
  });

  it('[store:quiz] - 퀴즈가 진행중인가?', () => {
    expect(reducer(undefined, setIsPlaying(true))).toEqual();
  });

  it('[store:quiz] - 난이도 설정:normal(보통)', () => {
    expect(reducer(undefined, setIsPlaying(true))).toEqual();
  });

  it('[store:quiz] - 난이도 설정:hard(어려움)', () => {
    expect(reducer(undefined, setIsPlaying(true))).toEqual();
  });

  it('[store:quiz] - 퀴즈 문항 STEP + 1 증가 -> 2로 잘 변하는가?', () => {
    expect(reducer(undefined, setIsPlaying(true))).toEqual();
  });

  it('[store:quiz] - 재시작시 부분 상태 변경', () => {
    expect(reducer(undefined, setIsPlaying(true))).toEqual();
  });

  it('[store:quiz] - 문항의 답 입력시 answers 저장이 잘되는가? ', () => {
    expect(reducer(undefined, setIsPlaying(true))).toEqual();
  });

  it('[store:quiz] - 문제 갯수가 10개 호출이 잘되는가?', () => {
    expect(reducer(undefined, setIsPlaying(true))).toEqual();
  });
});
