import { IDifficulty } from './types';

export const DIFFICULTY: IDifficulty = {
  random: {
    label: '랜덤',
    value: 'random',
  },
  easy: {
    label: '쉬움',
    value: 'easy',
  },
  medium: {
    label: '보통',
    value: 'medium',
  },
  hard: {
    label: '어려움',
    value: 'hard',
  },
};

export const QUIZ_MESSAGE = {
  empty: '답을 선택해주세요 🧐',
  correct: '정답이에요 🥳',
  incorrect: '아쉬워요 😭',
};
