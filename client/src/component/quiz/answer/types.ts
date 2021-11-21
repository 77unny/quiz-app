import { TQuestion } from '../../../store/quiz/types';

export interface IAnswerProps {
  questions: TQuestion;
  selectedValue: string;
  handleChange: (value: string) => void;
}
