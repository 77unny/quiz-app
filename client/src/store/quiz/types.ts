import { TValue } from '../../constants/types';

/**
 * @description API response
 * */
export type TQuestion = {
  category: string;
  type: 'multiple' | 'boolean';
  difficulty: TValue;
  question: string;
  correct_answer: string;
  incorrect_answers: [string, string, string];
};

/**
 - 시작 시간 : 기록 저장할때 시작시간을 key 로 가지고 저장 해보자.
 - 소요된 시간 : 시작시간 ~ 종료시간
 - 정답 수
 - 오답 수
 - 문제리스트? : 추후 다시풀기 라는 기능 만들어 볼때 사용할 수 있을듯..?!
 */
export interface IQuizInitialState {
  progress: boolean;
  elapsedTime: number;
  difficulty: TValue;
  NumberOfCorrectAnswer: number;
  NumberOfIncorrectAnswer: number;
  questions: TQuestion[];
}
