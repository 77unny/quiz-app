import reducer, { reset, setAnswer, setDifficulty, setIsPlaying, setQuestions, setRestart, setStep } from './index';
import { TQuestion } from './types';

describe('[Store - quiz]', () => {
  const initialState = {
    isPlaying: false,
    difficulty: 'random',
    NumberOfCorrectAnswer: 0,
    NumberOfIncorrectAnswer: 0,
    step: 0,
    questions: [],
    answers: [],
  };
  const mockQuestions: TQuestion[] = [
    {
      category: '@@',
      type: 'multiple',
      difficulty: 'random',
      question: '@@',
      correct_answer: '@@',
      incorrect_answers: ['@@', '@@', '@@'],
    },
    {
      category: '@@',
      type: 'multiple',
      difficulty: 'random',
      question: '@@',
      correct_answer: '@@',
      incorrect_answers: ['@@', '@@', '@@'],
    },
    {
      category: '@@',
      type: 'multiple',
      difficulty: 'random',
      question: '@@',
      correct_answer: '@@',
      incorrect_answers: ['@@', '@@', '@@'],
    },
    {
      category: '@@',
      type: 'multiple',
      difficulty: 'random',
      question: '@@',
      correct_answer: '@@',
      incorrect_answers: ['@@', '@@', '@@'],
    },
    {
      category: '@@',
      type: 'multiple',
      difficulty: 'random',
      question: '@@',
      correct_answer: '@@',
      incorrect_answers: ['@@', '@@', '@@'],
    },
    {
      category: '@@',
      type: 'multiple',
      difficulty: 'random',
      question: '@@',
      correct_answer: '@@',
      incorrect_answers: ['@@', '@@', '@@'],
    },
    {
      category: '@@',
      type: 'multiple',
      difficulty: 'random',
      question: '@@',
      correct_answer: '@@',
      incorrect_answers: ['@@', '@@', '@@'],
    },
    {
      category: '@@',
      type: 'multiple',
      difficulty: 'random',
      question: '@@',
      correct_answer: '@@',
      incorrect_answers: ['@@', '@@', '@@'],
    },
    {
      category: '@@',
      type: 'multiple',
      difficulty: 'random',
      question: '@@',
      correct_answer: '@@',
      incorrect_answers: ['@@', '@@', '@@'],
    },
    {
      category: '@@',
      type: 'multiple',
      difficulty: 'random',
      question: '@@',
      correct_answer: '@@',
      incorrect_answers: ['@@', '@@', '@@'],
    },
  ];

  it('[store:quiz] - reset 초기화', () => {
    const previousState = {
      ...initialState,
      isPlaying: true,
      NumberOfCorrectAnswer: 5,
      NumberOfIncorrectAnswer: 5,
      step: 9,
      answers: [true, true, true, true, true, false, false, false, false, false],
    };
    expect(reducer(previousState, reset())).toEqual({
      isPlaying: false,
      difficulty: 'random',
      NumberOfCorrectAnswer: 0,
      NumberOfIncorrectAnswer: 0,
      step: 0,
      questions: [],
      answers: [],
    });
  });

  it('[store:quiz] - 퀴즈가 진행중인가?', () => {
    expect(reducer(initialState, setIsPlaying(true))).toEqual({
      isPlaying: true,
      difficulty: 'random',
      NumberOfCorrectAnswer: 0,
      NumberOfIncorrectAnswer: 0,
      step: 0,
      questions: [],
      answers: [],
    });
  });

  it('[store:quiz] - 난이도 설정:normal(보통)', () => {
    expect(reducer(initialState, setDifficulty('normal'))).toEqual({
      isPlaying: false,
      difficulty: 'normal',
      NumberOfCorrectAnswer: 0,
      NumberOfIncorrectAnswer: 0,
      step: 0,
      questions: [],
      answers: [],
    });
  });

  it('[store:quiz] - 난이도 설정:hard(어려움)', () => {
    expect(reducer(initialState, setDifficulty('hard'))).toEqual({
      isPlaying: false,
      difficulty: 'hard',
      NumberOfCorrectAnswer: 0,
      NumberOfIncorrectAnswer: 0,
      step: 0,
      questions: [],
      answers: [],
    });
  });

  it('[store:quiz] - 퀴즈 문항 STEP + 1 증가', () => {
    const previousState = {
      ...initialState,
      isPlaying: true,
    };
    expect(reducer(previousState, setStep())).toEqual({
      isPlaying: true,
      difficulty: 'random',
      NumberOfCorrectAnswer: 0,
      NumberOfIncorrectAnswer: 0,
      step: 1,
      questions: [],
      answers: [],
    });
  });

  it('[store:quiz] - 재시작시 부분 상태 변경', () => {
    const previousState = {
      ...initialState,
      isPlaying: true,
      NumberOfCorrectAnswer: 1,
      NumberOfIncorrectAnswer: 1,
      step: 2,
      questions: [],
      answers: [true, false],
    };
    expect(reducer(previousState, setRestart())).toEqual({
      isPlaying: true,
      difficulty: 'random',
      NumberOfCorrectAnswer: 0,
      NumberOfIncorrectAnswer: 0,
      step: 0,
      questions: [],
      answers: [],
    });
  });

  it('[store:quiz] - 문항의 답 입력시 answers 저장이 잘되는가? - 정답 ', () => {
    const previousState = {
      ...initialState,
      isPlaying: true,
      NumberOfCorrectAnswer: 0,
      NumberOfIncorrectAnswer: 0,
      answers: [],
    };
    expect(reducer(previousState, setAnswer(true))).toEqual({
      isPlaying: true,
      difficulty: 'random',
      NumberOfCorrectAnswer: 1,
      NumberOfIncorrectAnswer: 0,
      step: 0,
      questions: [],
      answers: [true],
    });
  });

  it('[store:quiz] - 문항의 답 입력시 answers 저장이 잘되는가? - 오답 ', () => {
    const previousState = {
      ...initialState,
      isPlaying: true,
      NumberOfCorrectAnswer: 0,
      NumberOfIncorrectAnswer: 0,
      answers: [],
    };
    expect(reducer(previousState, setAnswer(false))).toEqual({
      isPlaying: true,
      difficulty: 'random',
      NumberOfCorrectAnswer: 0,
      NumberOfIncorrectAnswer: 1,
      step: 0,
      questions: [],
      answers: [false],
    });
  });

  it('[store:quiz] - 문제 갯수가 10개 호출이 잘되는가?', () => {
    const previousState = {
      ...initialState,
      isPlaying: true,
    };
    expect(reducer(previousState, setQuestions(mockQuestions))).toEqual({
      isPlaying: true,
      difficulty: 'random',
      NumberOfCorrectAnswer: 0,
      NumberOfIncorrectAnswer: 0,
      step: 0,
      questions: [...mockQuestions],
      answers: [],
    });
  });
});
