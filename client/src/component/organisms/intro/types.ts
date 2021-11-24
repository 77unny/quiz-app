import { TQuestion } from '../../../store/quiz/types';

export interface IRequest {
  response_code: number;
  results: TQuestion[];
}
