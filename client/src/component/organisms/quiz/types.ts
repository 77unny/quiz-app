import { TQuestion } from '../../../store/quiz/types';

export interface ISaveData {
  setDate: string;
  questions: TQuestion[];
  difficulty: string;
  NumberOfCorrectAnswer: number;
  NumberOfIncorrectAnswer: number;
  time: number;
}
